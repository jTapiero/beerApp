import { Component, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';
import { Beer } from '@model/beer';
import { ListBeerMode } from '@model/list-beer-mode';
import { PunkApiService } from '@service/punk-api.service';
import { BeerListHandlerService } from '@service/beer-list-handler.service';
import { SaveSearchService } from '@service/save-search.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-search-beer-page',
  templateUrl: './search-beer-page.component.html',
  styleUrls: ['./search-beer-page.component.scss']
})
export class SearchBeerPageComponent implements OnInit,OnDestroy {

  public beers:Array<Beer> = [];
  modeOn:ListBeerMode = ListBeerMode.BROWSE;
  private foodPairedSubscription: Subscription = new Subscription;
  private browseSubscription: Subscription = new Subscription;

  public get ListBeerMode(): typeof ListBeerMode {
    return ListBeerMode; 
  }

  constructor(private punkApiService:PunkApiService,
              private beerListHandlerService:BeerListHandlerService,
              private saveSearchService:SaveSearchService) {
    this.beerListHandlerService.listModeEvent.subscribe((mode)=>{
      this.modeOn = mode;
      if (this.modeOn == ListBeerMode.BROWSE) {
        this.initBrowseMode();
      }
    })
   }

  ngOnInit(): void {
    if (this.saveSearchService.searchResult.length !== 0) {
     this.beers = this.saveSearchService.searchResult;
    } else {
      this.initBrowseMode();
    }
  }

  ngOnDestroy(): void {
    this.foodPairedSubscription.unsubscribe();
    this.browseSubscription.unsubscribe();
  }

  OnFoodPairedSearch(data:string):void{
    this.foodPairedSubscription = this.punkApiService.getFoodPairingSearch(data).subscribe(
      (beers) => {this.beers = beers as Array<Beer>;
        this.saveSearchService.searchResult = beers as Array<Beer>;
        this.saveSearchService.searchInput = data;
      },
      (error) => { this.beers = [] ; console.error(error)});
  }

  private initBrowseMode():void{
    this.browseSubscription = this.punkApiService.getBeerPage(1).subscribe(
      (beers) => { this.beers = beers as Array<Beer>},
      (error) => { this.beers = [] ; console.error(error)});
  }

}

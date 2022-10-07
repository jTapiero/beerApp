import { Component, OnInit } from '@angular/core';
import { Beer } from '@model/beer';
import { ListBeerMode } from '@model/list-beer-mode';
import { PunkApiService } from '@service/punk-api.service';
import { BeerListHandlerService } from '@service/beer-list-handler.service';

@Component({
  selector: 'app-search-beer-page',
  templateUrl: './search-beer-page.component.html',
  styleUrls: ['./search-beer-page.component.scss']
})
export class SearchBeerPageComponent implements OnInit {

  public beers:Array<Beer> = [];
  modeOn:ListBeerMode = ListBeerMode.BROWSE;

  public get ListBeerMode(): typeof ListBeerMode {
    return ListBeerMode; 
  }

  constructor(private punkApiService:PunkApiService,
              private beerListHandlerService:BeerListHandlerService) {
    this.beerListHandlerService.listModeEvent.subscribe((mode)=>{
      this.modeOn = mode;
      if (this.modeOn == ListBeerMode.BROWSE) {
        this.initBrowseMode();
      }
    })
   }

  ngOnInit(): void {
    this.initBrowseMode();
  }

  OnFoodPairedSearch(data:string):void{
    this.punkApiService.getFoodPairingSearch(data).subscribe(
      (beers) => {this.beers = beers as Array<Beer>},
      (error) => { this.beers = [] ; console.error(error)});
  }

  private initBrowseMode():void{
    this.punkApiService.getBeerPage(1).subscribe(
      (beers) => { this.beers = beers as Array<Beer>},
      (error) => { this.beers = [] ; console.error(error)});
  }

}

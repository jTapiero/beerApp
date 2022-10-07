
import { Component, ElementRef, Input, OnChanges, OnInit, SimpleChanges, ViewChild } from '@angular/core';
import { Beer } from '@model/beer';
import { ListBeerMode } from '@model/list-beer-mode';
import { BeerListHandlerService } from '@service/beer-list-handler.service';
import { PunkApiService } from '@service/punk-api.service';
import { UserfavouritesService } from '@service/userfavourites.service';
import { Observer } from 'rxjs';

@Component({
  selector: 'app-beer-list',
  templateUrl: './beer-list.component.html',
  styleUrls: ['./beer-list.component.scss']
})
export class BeerListComponent implements OnInit {

  @ViewChild('divList')elem!: ElementRef;
  @Input() listBeer:Array<Beer> = [];
  @Input() modeOn:ListBeerMode = ListBeerMode.BROWSE;

  private pageNumber:number = 1;
  private endScroll:boolean = false;

  constructor( private beerListHandlerService:BeerListHandlerService,
               private punkApiService:PunkApiService,
               private userfavouritesService:UserfavouritesService ) {
      this.beerListHandlerService.listModeEvent.subscribe((mode)=>{
        this.modeOn = mode;
        this.listModeHandler();
      });
  }

  ngOnInit(): void {
    this.listModeHandler();
  }

  onScroll():void{
    const handleApiResponse:Observer<Beer[]| any> = {
      next:(pageBeers:Array<Beer>)=>{
        if (pageBeers) {
          this.listBeer.push(...pageBeers);
        } else {
          this.endScroll = true;
        }
      },
      error:(error)=>{ console.error(error)},
      complete:()=>{},
    }

    if (!this.endScroll && this.modeOn == ListBeerMode.BROWSE) {
      this.punkApiService.getBeerPage(++this.pageNumber)
      .subscribe(handleApiResponse) ;
    }
  }

  private listModeHandler():void{
    if (this.modeOn == ListBeerMode.BROWSE ) {
      this.endScroll = false;
      this.pageNumber = 1;
      this.scrolListToTop();
    }

    if (this.modeOn == ListBeerMode.FAVOURITE) {
      this.removeBeerFromListListener();
    }
  }

  private scrolListToTop():void{
    if (this.elem !== undefined) {
      this.elem.nativeElement.scrollTo(0,0)
    }
  }

  private removeBeerFromListListener():void{
    this.userfavouritesService.removeFromListEvent.subscribe(
      (beerId:number)=>{ 
        if (this.modeOn == ListBeerMode.FAVOURITE) {
          this.removeFromList(beerId);
        }
      }
    );
  }  

  private removeFromList(beerId:number):void{
    this.listBeer.forEach((beer,idx,list)=>{
      if (beer.id == beerId) {
        list.splice(idx,1);
      }
    })
  }

}



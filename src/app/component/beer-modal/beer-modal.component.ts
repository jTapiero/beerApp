import { Component, Inject, OnInit, ViewEncapsulation } from '@angular/core';
import { MAT_DIALOG_DATA} from '@angular/material/dialog';
import { Beer, FavoriteBeer } from '@model/beer';
import { ListBeerMode } from '@model/list-beer-mode';
import { BeerListHandlerService } from '@service/beer-list-handler.service';

@Component({
  selector: 'app-beer-modal',
  templateUrl: './beer-modal.component.html',
  styleUrls: ['./beer-modal.component.scss'],
})
export class BeerModalComponent implements OnInit {

  modeModal:ListBeerMode =ListBeerMode.BROWSE;
  favoriteBeer:FavoriteBeer={} as FavoriteBeer;
  
  public get ListBeerMode(): typeof ListBeerMode {
    return ListBeerMode; 
  }
  
  constructor(@Inject(MAT_DIALOG_DATA) public data: Beer | FavoriteBeer ,
              private beerListHandlerService:BeerListHandlerService  ) { }

  ngOnInit(): void {
    this.initStatusHandler();
  }

  private initStatusHandler():void{
    this.beerListHandlerService.listModeEvent.subscribe((mode)=>{this.modeModal=mode;});
  }

}

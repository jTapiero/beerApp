import { Component, Input, OnInit, Output } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Beer, FavoriteBeer } from '@model/beer';
import { BeerModalComponent } from '@component/beer-modal/beer-modal.component';

@Component({
  selector: 'app-beer-card',
  templateUrl: './beer-card.component.html',
  styleUrls: ['./beer-card.component.scss']
})
export class BeerCardComponent implements OnInit {

  @Input() beer:Beer = {} as Beer | FavoriteBeer;
  
  constructor(public modal: MatDialog) { }

  ngOnInit(): void {
  }

  openBeerModal():void{
    this.modal.open(BeerModalComponent,{data:this.beer, panelClass: 'custom-dialog-container'});
  }

}

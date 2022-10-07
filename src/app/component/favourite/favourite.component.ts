import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Beer } from '@model/beer';
import { IconUpdate } from '@model/icon-update';
import { UserfavouritesService } from '@service/userfavourites.service';

@Component({
  selector: 'app-favourite-icon',
  templateUrl: './favourite.component.html',
  styleUrls: ['./favourite.component.scss']
})
export class FavouriteComponent implements OnInit {

  @Input() beer:Beer= {} as Beer;
  isFavourite:boolean = false;

  constructor(private userfavouritesService:UserfavouritesService) { }

  ngOnInit(): void {
    this.isFavourite = this.userfavouritesService.isFavourite(`${this.beer.id}`)
    this.updateIsFavouriteListener()
  }

  onClick(event:MouseEvent):void{
    event.stopPropagation()
    this.isFavourite = !this.isFavourite
    if (this.isFavourite) {
      this.userfavouritesService.addFavouriteBeer(this.beer)
    } else {
      this.userfavouritesService.removeFavouriteBeer(`${this.beer.id}`)
    }
  }



  private updateIsFavouriteListener():void{
    this.userfavouritesService.updateFavouriteBeerEvent.subscribe((newUpdate:IconUpdate) =>{
      if (this.beer.id == newUpdate.beerId) {
        this.isFavourite = newUpdate.isFavouite;
      }
    }

    );

  }

}




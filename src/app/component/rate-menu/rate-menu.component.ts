import { Component, Input, OnChanges, OnInit, SimpleChanges, ViewEncapsulation } from '@angular/core';
import { FormControl } from '@angular/forms';
import { FavoriteBeer } from '@model/beer';
import { BeerRating } from '@model/beer-rating';
import { UserfavouritesService } from '@service/userfavourites.service';

@Component({
  selector: 'app-rate-menu',
  templateUrl: './rate-menu.component.html',
  styleUrls: ['./rate-menu.component.scss'],
  encapsulation:ViewEncapsulation.None
})
export class RateMenuComponent implements OnInit {

  @Input() beerId: number =-1;
  selectRateControl = new FormControl<BeerRating>(BeerRating.NEUTRAL,{updateOn:"change"})
  beerRatingSelected:BeerRating = BeerRating.NEUTRAL;
  beerFavorite:FavoriteBeer={} as FavoriteBeer;


  public get BeerRating(): BeerRating[] {
    return  Object.values(BeerRating);
  }

  constructor(private userfavouritesService:UserfavouritesService) {
   }

  ngOnInit(): void {
    this.initBeerRating();
    this.initUpdateRating();
  }

  private initBeerRating():void{
    let res = this.userfavouritesService.getAllFavouriteBeer().find(beer => beer.id == this.beerId)
    if (res) {
      this.beerFavorite = res as FavoriteBeer;
      this.beerRatingSelected = this.beerFavorite.rating;
      this.selectRateControl.setValue(this.beerFavorite.rating)
    }
  }

  private initUpdateRating():void{
    this.selectRateControl.valueChanges.subscribe((newRating) =>{
      if (newRating !== null ) {
        this.userfavouritesService.updateRatingBeer(this.beerId,newRating);
        this.beerRatingSelected = newRating;
      }
    });
  }

}

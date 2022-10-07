import { Component, OnInit } from '@angular/core';
import { Beer, FavoriteBeer } from '@model/beer';
import { ListBeerMode } from '@model/list-beer-mode';
import { UserfavouritesService } from '@service/userfavourites.service';
import { BeerListHandlerService } from '@service/beer-list-handler.service';

@Component({
  selector: 'app-favourite-beer-page',
  templateUrl: './favourite-beer-page.component.html',
  styleUrls: ['./favourite-beer-page.component.scss']
})
export class FavouriteBeerPageComponent implements OnInit {

  allFavouriteBeer:Beer[] | FavoriteBeer[] = [];

  public get ListBeerMode(): typeof ListBeerMode {
    return ListBeerMode; 
  }

  constructor(private userfavouritesService:UserfavouritesService,
              private beerListHandlerService:BeerListHandlerService) {
    this.beerListHandlerService.listMode = ListBeerMode.FAVOURITE;
    this.allFavouriteBeer = this.userfavouritesService.getAllFavouriteBeer();
  }

  ngOnInit(): void { 
  }
}

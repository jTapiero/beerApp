import { Injectable } from '@angular/core';
import { Beer } from '@model/beer';

@Injectable({
  providedIn: 'root'
})
export class SaveSearchService {
  
  
  public searchInput:string="";
  private beerList:Array<Beer> = [];
  
  public get searchResult() : Array<Beer> {
    return this.beerList;
  }
  
  public set searchResult(listBeer : Array<Beer>) {
    this.beerList = listBeer;
  }
  

  constructor() {}

   closeSearchSave():void{
    this.searchInput="";
    this.beerList = [];
   }
}

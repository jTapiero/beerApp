import { Injectable } from '@angular/core';
import { Beer, FavoriteBeer } from 'src/app/model/beer';
import { BeerRating } from '@model/beer-rating';
import { IconUpdate } from '@model/icon-update';
import { LocalStorageService } from 'angular-web-storage';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserfavouritesService {

  private removeFromListSubject = new Subject<number>()
  private updateFavouriteBeerSubject = new Subject<IconUpdate>()

  public get removeFromListEvent() : Observable<number> {
    return this.removeFromListSubject.asObservable();
  }

  public get updateFavouriteBeerEvent() : Observable<IconUpdate> {
    return this.updateFavouriteBeerSubject.asObservable();
  }

  constructor(private local: LocalStorageService) {
    
   }

   isFavourite(idBeer:string):boolean{
    return (this.local.get(idBeer))?true:false;
   }

   getAllFavouriteBeer():Beer[]{
    let beerList:Beer[] = []
    Object.keys(localStorage).forEach((key)=>{
      beerList.push(this.local.get(key));
    });
    
    return beerList ;
   }

   addFavouriteBeer(beer:Beer):void{
    if (!this.local.get(`${beer.id}`)) {
      let favoriteBeer:FavoriteBeer = {...beer, rating:BeerRating.NEUTRAL}
      this.local.set(`${beer.id}`,favoriteBeer,1,'d');
      this.updateFavouriteBeerSubject.next({
        beerId:beer.id,
        isFavouite:true} as IconUpdate);
    }
   }

   removeFavouriteBeer(idBeer:string):void{
    if (this.local.get(idBeer)) {
      this.local.remove(idBeer);
      this.updateFavouriteBeerSubject.next({
        beerId:Number(idBeer),
        isFavouite:false} as IconUpdate);
      this.removeFromListSubject.next(Number(idBeer));
    }
   }

   removeAllFavouriteBeer():void{
    Object.keys(localStorage).forEach((key)=>{
      this.updateFavouriteBeerSubject.next({
        beerId:Number(key),
        isFavouite:false} as IconUpdate);
        this.removeFromListSubject.next(Number(key));
    });
    this.local.clear();
   }

   updateRatingBeer(beerId:number,beerRating:BeerRating):void{
      let beer:FavoriteBeer = this.local.get(`${beerId}`);
      beer.rating = beerRating;
      this.local.set(`${beerId}`,beer)
   }   
}

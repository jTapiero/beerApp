import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PunkApiService {
  private PUNK_API_URL = "https://api.punkapi.com/v2/beers" ;
  private BEER_BY_PAGE = 12 ;

  constructor(private httpClient:HttpClient ) {}

  getAllBeer():Observable< any> {
    let url = `${ this.PUNK_API_URL}`;
    return this.httpClient.get(url);
  }

  getBeerPage(pageNumber:number):Observable<any> {
    let url = `${this.PUNK_API_URL}?page=${pageNumber}&per_page=${this.BEER_BY_PAGE}`;
    return this.httpClient.get(url);
  }

  getFoodPairingSearch(searchPatternRaw:string):Observable<any> {
    let searchPattern = searchPatternRaw.replace(" ","_");
    let url = `${this.PUNK_API_URL}?food=${searchPattern}`;
    return this.httpClient.get(url);
  }




}

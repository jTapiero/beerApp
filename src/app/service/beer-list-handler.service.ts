import { Injectable } from '@angular/core';
import { ListBeerMode } from '@model/list-beer-mode';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BeerListHandlerService {

  private listModeOn:ListBeerMode = ListBeerMode.BROWSE;
  private listModeSubject = new BehaviorSubject<ListBeerMode>(ListBeerMode.BROWSE); 

  public get listModeEvent() : Observable<ListBeerMode> {
    return this.listModeSubject.asObservable();
  }
 
  public get listMode() : ListBeerMode {
    return this.listModeOn;
  }
  
  public set listMode(mode : ListBeerMode) {
    this.listModeOn = mode;
    this.listModeSubject.next(mode);
  }
  
  constructor() { }
}

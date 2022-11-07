import { Component, EventEmitter, OnInit, Output, ViewEncapsulation } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ListBeerMode } from '@model/list-beer-mode';
import { BeerListHandlerService  } from '@service/beer-list-handler.service';
import { debounceTime, Subject } from 'rxjs';


@Component({
  selector: 'app-beer-search',
  templateUrl: './beer-search.component.html',
  styleUrls: ['./beer-search.component.scss'],
  encapsulation:ViewEncapsulation.None
})
export class BeerSearchComponent implements OnInit {

  @Output() foodPairedSearch= new EventEmitter<string>();

  foodPairedInputControl = new FormControl<string>('',{updateOn:"change"});
  advancedSearchMode:boolean = false;
  searchPattern:string = "";
  searchEvent = new Subject<string>()


  constructor(private beerListHandlerService:BeerListHandlerService) { }

  ngOnInit(): void {
    this.submitHandler()
  }

  onSubmitSearch(): void{ 
    this.searchPattern = (this.foodPairedInputControl.value)?this.foodPairedInputControl.value:"";
    this.searchEvent.next(this.searchPattern)
  }

  submitHandler():void{
    this.searchEvent.pipe(debounceTime(500)).subscribe(()=>{
      this.beerListHandlerService.listMode = ListBeerMode.SEARCH;
      this.foodPairedSearch.emit(this.searchPattern);
    })
  }

  onChangeStatePanel(isSearchOn:boolean): void{
    this.advancedSearchMode = isSearchOn;
    if (!this.advancedSearchMode) {
      this.beerListHandlerService.listMode = ListBeerMode.BROWSE;
      this.searchPattern = "";
    }
  }

}

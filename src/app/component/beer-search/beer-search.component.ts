import { AfterViewInit, Component, EventEmitter, OnInit, Output, ViewChild, ViewEncapsulation } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatExpansionPanel } from '@angular/material/expansion';
import { ListBeerMode } from '@model/list-beer-mode';
import { BeerListHandlerService  } from '@service/beer-list-handler.service';
import { SaveSearchService } from '@service/save-search.service';
import {  Subject } from 'rxjs';


@Component({
  selector: 'app-beer-search',
  templateUrl: './beer-search.component.html',
  styleUrls: ['./beer-search.component.scss'],
  encapsulation:ViewEncapsulation.None
})
export class BeerSearchComponent implements OnInit,AfterViewInit {

  @Output() foodPairedSearch= new EventEmitter<string>();
  @ViewChild('panel', { static: true, read: MatExpansionPanel }) panel!: MatExpansionPanel;

  foodPairedInputControl = new FormControl<string>('',{updateOn:"change"});
  advancedSearchMode:boolean = false;
  searchPattern:string = "";
  searchEvent = new Subject<string>()


  constructor(private beerListHandlerService:BeerListHandlerService,
              private saveSearchService:SaveSearchService) { }


  ngOnInit(): void {
    if (this.saveSearchService.searchInput != "") {
      this.panel.expanded =true;
      this.beerListHandlerService.listMode = ListBeerMode.SEARCH;
    }
    this.submitHandler()
  }

  ngAfterViewInit(): void {
    if (this.saveSearchService.searchInput != "") {
      this.foodPairedInputControl.setValue(this.saveSearchService.searchInput)
    } 
  }

  onSubmitSearch(): void{ 
    this.searchPattern = (this.foodPairedInputControl.value)?this.foodPairedInputControl.value:"";
    this.searchEvent.next(this.searchPattern)
  }

  submitHandler():void{
    this.searchEvent.subscribe(()=>{
      this.beerListHandlerService.listMode = ListBeerMode.SEARCH;
      this.foodPairedSearch.emit(this.searchPattern);
    })
  }

  onChangeStatePanel(isSearchOn:boolean): void{
    this.advancedSearchMode = isSearchOn;
    if (!this.advancedSearchMode) {
      this.beerListHandlerService.listMode = ListBeerMode.BROWSE;
      this.saveSearchService.closeSearchSave()
      this.foodPairedInputControl.setValue("");
      this.searchPattern = "";
    }
  }
}

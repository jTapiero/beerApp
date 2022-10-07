import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CheckRemoveModalComponent } from '@component/check-remove-modal/check-remove-modal.component';

@Component({
  selector: 'app-beer-favourite',
  templateUrl: './beer-favourite.component.html',
  styleUrls: ['./beer-favourite.component.scss']
})
export class BeerFavouriteComponent implements OnInit {

  constructor(public modal: MatDialog) { }

  ngOnInit(): void {
  }

  checkRemoveModal():void{
    this.modal.open(CheckRemoveModalComponent,{ panelClass: 'custom-dialog-container'});
  }

}

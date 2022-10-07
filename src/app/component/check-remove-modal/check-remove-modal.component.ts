import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { UserfavouritesService } from '@service/userfavourites.service';

@Component({
  selector: 'app-check-remove-modal',
  templateUrl: './check-remove-modal.component.html',
  styleUrls: ['./check-remove-modal.component.scss']
})
export class CheckRemoveModalComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<CheckRemoveModalComponent>,
              private userfavouritesService:UserfavouritesService ) { }

  ngOnInit(): void {
  }

  removeAllBeerFromFavouriteList(): void{
    this.userfavouritesService.removeAllFavouriteBeer()
  }

}

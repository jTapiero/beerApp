import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { MatSelectModule } from '@angular/material/select';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatFormFieldModule } from '@angular/material/form-field';


@NgModule({
  declarations: [

  ],
  imports: [
    CommonModule,
    MatSelectModule,
    MatExpansionModule,
    MatDialogModule,
    MatButtonModule,
    MatIconModule,
    MatCheckboxModule,
    MatFormFieldModule
  ],
  exports:[
    CommonModule,
    MatSelectModule,
    MatExpansionModule,
    MatDialogModule,
    MatButtonModule,
    MatIconModule,
    MatCheckboxModule,
    MatFormFieldModule
  ]
})
export class AngularMaterialModule { }

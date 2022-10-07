import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FavouriteBeerPageComponent } from './page/favourite-beer-page/favourite-beer-page.component';
import { SearchBeerPageComponent } from '@page/search-beer-page/search-beer-page.component';
import { HttpClientModule } from '@angular/common/http';
import { HeaderComponent } from './component/header/header.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatIconModule } from '@angular/material/icon';
import { BeerListComponent } from './component/beer-list/beer-list.component';
import { BeerSearchComponent } from './component/beer-search/beer-search.component';
import { BeerCardComponent } from './component/beer-card/beer-card.component';
import { BeerModalComponent } from './component/beer-modal/beer-modal.component';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FavouriteComponent } from './component/favourite/favourite.component'; 
import { AngularWebStorageModule } from 'angular-web-storage';
import { BeerFavouriteComponent } from './component/beer-favourite/beer-favourite.component';
import { CheckRemoveModalComponent } from './component/check-remove-modal/check-remove-modal.component';
import { RateMenuComponent } from './component/rate-menu/rate-menu.component';
import { MatSelectModule } from '@angular/material/select';
import { MatExpansionModule } from '@angular/material/expansion';

@NgModule({
  declarations: [
    AppComponent,
    FavouriteBeerPageComponent,
    SearchBeerPageComponent,
    HeaderComponent,
    BeerListComponent,
    BeerSearchComponent,
    BeerCardComponent,
    BeerModalComponent,
    FavouriteComponent,
    BeerFavouriteComponent,
    CheckRemoveModalComponent,
    RateMenuComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatIconModule,
    MatDialogModule,
    MatButtonModule,
    InfiniteScrollModule,
    MatCheckboxModule,
    FormsModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    AngularWebStorageModule,
    MatSelectModule,
    MatExpansionModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

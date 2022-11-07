import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FavouriteBeerPageComponent } from './page/favourite-beer-page/favourite-beer-page.component';
import { SearchBeerPageComponent } from '@page/search-beer-page/search-beer-page.component';
import { HeaderComponent } from './component/header/header.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BeerListComponent } from './component/beer-list/beer-list.component';
import { BeerSearchComponent } from './component/beer-search/beer-search.component';
import { BeerCardComponent } from './component/beer-card/beer-card.component';
import { BeerModalComponent } from './component/beer-modal/beer-modal.component';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';
import { FavouriteComponent } from './component/favourite/favourite.component'; 
import { AngularWebStorageModule } from 'angular-web-storage';
import { BeerFavouriteComponent } from './component/beer-favourite/beer-favourite.component';
import { CheckRemoveModalComponent } from './component/check-remove-modal/check-remove-modal.component';
import { RateMenuComponent } from './component/rate-menu/rate-menu.component';
import { AngularMaterialModule } from '@modules/angular-material/angular-material.module';


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
    InfiniteScrollModule,
    FormsModule,
    ReactiveFormsModule,
    AngularWebStorageModule,
    AngularMaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

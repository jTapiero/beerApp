import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FavouriteBeerPageComponent } from '@page/favourite-beer-page/favourite-beer-page.component';
import { SearchBeerPageComponent } from '@page/search-beer-page/search-beer-page.component';

const routes: Routes = [  
  { path: '', redirectTo: '/searchBeer', pathMatch: 'full' },
  { path: 'searchBeer', component: SearchBeerPageComponent },
  { path: 'fabouriteBeer', component: FavouriteBeerPageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

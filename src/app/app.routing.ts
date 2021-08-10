//burada routing tanımlamaları yapılacak
import { Routes, RouterModule } from '@angular/router';
import { SearchResultComponent } from './search-result/search-result.component';
import { SearchComponent } from './search/search.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppComponent } from './app.component';

const routes: Routes = [
   // { path: '', component: AppComponent},
    { path: 'search', component: SearchComponent },
    { path: 'searchresult', component: SearchResultComponent }
  ];

  @NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
  })
export class AppRoutingModule { }
export const AppRouting = RouterModule.forRoot(routes);



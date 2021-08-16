//burada routing tanımlamaları yapılacak
import { Routes, RouterModule } from '@angular/router';
import { SearchComponent } from './search/search.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppComponent } from './app.component';
import { RssfeedComponent } from './rssfeed/rssfeed.component';
import { XmlParserComponent } from './xml-parser/xml-parser.component';

const routes: Routes = [
   //{ path: '', component: AppComponent},
    { path: 'search', component: SearchComponent },
    { path: 'xml', component: XmlParserComponent }
  ];

  @NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
  })
export class AppRoutingModule { }
export const AppRouting = RouterModule.forRoot(routes);



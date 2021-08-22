import { Injectable, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { SearchComponent } from './search/search.component';

import { ActivatedRoute, RouterModule } from '@angular/router';
import { RssfeedComponent } from './rssfeed/rssfeed.component';
import { FormsModule } from '@angular/forms';
import { AppRouting } from './app.routing';
//import { RSSParserService } from './rss-parser.service';
import { XmlParserComponent } from './xml-parser/xml-parser.component';
import {XmlParser} from "@angular/compiler";
@NgModule({
  declarations: [
    AppComponent,
    SearchComponent,
    RssfeedComponent,
    XmlParserComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule,
    AppRouting,



  ],

  providers: [
    //RSSParserService
    XmlParser

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

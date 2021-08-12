import { Injectable, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { SearchComponent } from './search/search.component';
import { SearchResultComponent } from './search-result/search-result.component';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { RssfeedComponent } from './rssfeed/rssfeed.component';
import { FormsModule } from '@angular/forms';
import { AppRouting } from './app.routing';
import { RSSParserService } from './rss-parser.service';
@NgModule({
  declarations: [
    AppComponent,
    SearchComponent,
    SearchResultComponent,
    RssfeedComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule,
    AppRouting,
    
  
  ],

  providers: [
    RSSParserService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

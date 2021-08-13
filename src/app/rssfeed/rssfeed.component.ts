import { HttpClient } from '@angular/common/http';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Routes } from '@angular/router';
//import { Parser } from 'rss-parser';

@Component({
  selector: 'app-rssfeed',
  templateUrl: './rssfeed.component.html',
  styleUrls: ['./rssfeed.component.css']
})
export class RssfeedComponent implements OnInit {
  //@Output() results: any;
  @Output() results = new EventEmitter<string>();
  
  addNewItem(value: string) {
    this.results.emit(value);
  }
  constructor(
  
  //  public http: HttpClient,
    
    ) { }
 
  ngOnInit(): void {
    
  }
  
  
  search(http: string) {
   // this.http.post(url, value).subscribe(results => this.searchResult.next(results));
}

}

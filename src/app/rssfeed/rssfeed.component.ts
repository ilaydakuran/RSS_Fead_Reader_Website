import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { Routes } from '@angular/router';


@Component({
  selector: 'app-rssfeed',
  templateUrl: './rssfeed.component.html',
  styleUrls: ['./rssfeed.component.css']
})
export class RssfeedComponent implements OnInit {
 
  //results: searchResult[] = [];
  searchResult: any;
  constructor(
  
    public http: HttpClient,
    
    ) { }
  @Input() feed: any;
  ngOnInit(): void {
    
  }
  
  
  search(http: string) {
   // this.http.post(url, value).subscribe(results => this.searchResult.next(results));
}

}

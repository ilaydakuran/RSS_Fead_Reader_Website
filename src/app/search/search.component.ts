import { Component, Input, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { SearchResult } from '../search-result/search-result.model';
import { Router } from '@angular/router';


@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  results: SearchResult[] = [];
 
  @Input() feed_url: any;
 //const url= "https://hnrss.org/frontpage";
  constructor(
    public url: HttpClient,
    private router: Router,
    
  
  ) {}
  
  ngOnInit(): void {
  }
 
  search(url: any) {
    this.router.url === '/search';
    console.log(this.router.url);
  }
  
  openLinkInBrowser() {
    window.open(this.feed_url.link);
  }
  


  updateResults(results: SearchResult[]): void {
    this.results = results;
    
    
    // console.log("results:", this.results); // uncomment to take a look
  }
}
 


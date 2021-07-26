import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { SearchResult } from '../search-result/search-result.model';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  results: SearchResult[] = [];
  loading: boolean = false;
 
  constructor(
    public url: HttpClient,
  
  ) {}
  
  ngOnInit(): void {
  }
 

  updateResults(results: SearchResult[]): void {
    this.results = results;
    // console.log("results:", this.results); // uncomment to take a look
  }
}
 


import { Component, Input, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { SearchResult } from '../search-result/search-result.model';
import { ActivatedRoute, Router, Routes } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';



@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  results: SearchResult[] = [];
 
  @Input() feed_url: string | undefined;
  
  entries : Array<any> = [];
 
  
  constructor(
    
    private router: Router,
    public http: HttpClient,
    
  
  ) { 

  }
  ngOnInit() {
    //this.feed_url = this.http.();
  }
 

  
  
 
  search(http: HttpClient) {
    //this.http
   // console.log(this.route.url);
 //  this.feed_url = URL.get();
  }
  onClickSubmit(data: { http: HttpClient; }) {
    
    if(!data){
      alert("URL is not valid");
    }
    else{
      alert("URL is submitted");
      this.openLinkInBrowser();
    }
    
    
 }
  
  openLinkInBrowser() {
  
      window.open(this.feed_url); // yeni sekme açıyor 
    
  
  }
  

  updateResults(results: SearchResult[]): void {
    this.results = results;
    
  }
}
 

function parseURL() {
  throw new Error('Function not implemented.');
}

function parseUrlWrapper() {
  throw new Error('Function not implemented.');
}



function onClickSubmit(data: any, arg1: { http: typeof HttpClient; }) {
  throw new Error('Function not implemented.');
}

function data(data: any, arg1: { http: typeof HttpClient; }) {
  throw new Error('Function not implemented.');
}

function openLinkInBrowser() {
  throw new Error('Function not implemented.');
}

function updateResults(results: any, arg1: any) {
  throw new Error('Function not implemented.');
}

function results(results: any, arg1: any) {
  throw new Error('Function not implemented.');
}


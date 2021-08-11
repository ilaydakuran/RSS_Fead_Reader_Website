import { Component, Input, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { SearchResult } from '../search-result/search-result.model';
import { ActivatedRoute, Router, Routes } from '@angular/router';
<<<<<<< HEAD
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
=======
>>>>>>> 2561b30f09c4bf0ccaa207c23c8e45f67de4d0dd



@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  results: SearchResult[] = [];
 
  @Input() feed_url: string | undefined;
  
  entries : Array<any> = [];
<<<<<<< HEAD
 
  
  constructor(
    
=======

  constructor(
   
>>>>>>> 2561b30f09c4bf0ccaa207c23c8e45f67de4d0dd
    private router: Router,
    public http: HttpClient,
    
  
<<<<<<< HEAD
  ) { 

  }
  ngOnInit() {
    //this.feed_url = this.http.();
  }
 

  
  
 
  search(http: HttpClient) {
    //this.http
   // console.log(this.route.url);
 //  this.feed_url = URL.get();
=======
  ) {  }
  
  


  
 

  
  ngOnInit() {
    //this.feed_url = this.http.();
>>>>>>> 2561b30f09c4bf0ccaa207c23c8e45f67de4d0dd
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
  
  
  
 
  search(http: HttpClient) {
    //this.http
   // console.log(this.route.url);
  }
  onClickSubmit(data: { http: HttpClient; }) {
    alert("URL is submitted");
    this.openLinkInBrowser();
 }
  openLinkInBrowser() {
<<<<<<< HEAD
  
      window.open(this.feed_url); // yeni sekme açıyor 
    
=======
   window.open(this.feed_url); // yeni sekme açıyor 
>>>>>>> 2561b30f09c4bf0ccaa207c23c8e45f67de4d0dd
  
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


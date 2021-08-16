import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { ActivatedRoute, Router, Routes } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { XmlParserComponent } from '../xml-parser/xml-parser.component';
import { Url, UrlObject } from 'url';


@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  //results: SearchResult[] = [];
 
  @Input() feed_url: string;
  constructor(
    
    private router: Router,
    public http: HttpClient,
    
  
  ) {
  }
  ngOnInit() {
   
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
      console.log(this.feed_url); //girilen linki konsola basar
      
  }
  

  
}
 




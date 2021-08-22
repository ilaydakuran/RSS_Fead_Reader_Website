import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { ActivatedRoute, Router, Routes } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

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

    // @ts-ignore
    if(data!= this.feed_url){
      alert("URL is not valid, enter a valid URL");
      console.log('wrong url');
    }
    else{
      alert("URL is submitted");
      this.openLinkInBrowser();
    }
 }

  openLinkInBrowser() {

     window.open(this.feed_url); // yeni sekme açıyor
      console.log(this.feed_url); //girilen linki konsola basar
    this.router.navigate(['/xml']);
  }



}





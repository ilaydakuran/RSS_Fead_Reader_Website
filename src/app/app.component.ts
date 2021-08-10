import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { SearchComponent } from './search/search.component';
//import { FeedService } from './feed-service.service';
import { Router,NavigationEnd  } from '@angular/router';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'RSS FEED READER WEBSITE';
  
  
  private feedUrl: string = 'https%3A%2F%2Fwww.becompany.ch%2Fen%2Fblog%2Ffeed.xml';
  private feeds: any;
  public href: string = "";
  url: string = "asdf";
  

 constructor(private router: Router) {

 }
 ngOnInit() {
  this.href = this.router.url;
   console.log(this.router.url);
}

 
  
}


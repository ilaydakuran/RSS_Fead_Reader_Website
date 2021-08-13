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
  
  
  
  

 constructor(private router: Router) {

 }
 ngOnInit() {
  
}

 
  
}


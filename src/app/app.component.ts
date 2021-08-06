import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { SearchComponent } from './search/search.component';
//import { FeedService } from './feed-service.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'RSS FEED READER WEBSITE';
  
  router: any;
  private feedUrl: string = 'https%3A%2F%2Fwww.becompany.ch%2Fen%2Fblog%2Ffeed.xml';
  private feeds: any;
 
 
 urlForm: FormGroup;

 
 urlRegEx =
   '[-a-zA-Z0-9@:%_+.~#?&//=]{2,256}(.[a-z]{2,4})?\b(/[-a-zA-Z0-9@:%_+.~#?&//=]*)?';

 constructor() {

   this.urlForm = new FormGroup({
     url: new FormControl('', {
       validators: [Validators.required, Validators.pattern(this.urlRegEx)],
       updateOn: 'blur',
     }),
   });


 }
 submit() {
   console.log(this.urlForm.value);
 }
 
  
}


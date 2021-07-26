import { Component, EventEmitter, Input, Output } from '@angular/core';
//import { Url } from 'url';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'RSS FEED READER WEBSITE';
  @Input() url!: ""; // TODO
  // bunu nasıl alıcağımı bilip app.component.htmlde {{ url }} olarak yazıcam sanırım get ile alıcaz.

 // @Input() url!: Url;
  //itemImageUrl = 'assets/teapot.svg';
  //lineThrough = '';
  //displayNone = '';
  //@Input() prefix = '';
// @Output() submitButton = new EventEmitter<Url>();

  submit() {
  // this.submitButton.emit(this.url);

  }
  
}


import { Component } from '@angular/core';
import * as xml2js from 'xml2js';
import { HttpClient, HttpHeaders } from '@angular/common/http';
//XML PARSER HAS no callbacks
@Component({
  selector: 'app-xml-parser',
  templateUrl: './xml-parser.component.html',
  styleUrls: ['./xml-parser.component.css']
})
export class XmlParserComponent {
  public xmlItems: any; 
  constructor(private _http: HttpClient) { this.loadXML(); }
  loadXML() {
    this._http.get('/assets/feeds.xml',
      {
        headers: new HttpHeaders()
          .set('Content-Type', 'text/xml')
          .append('Access-Control-Allow-Methods', 'GET')
          .append('Access-Control-Allow-Origin', '*')
          .append('Access-Control-Allow-Headers', "Access-Control-Allow-Headers, Access-Control-Allow-Origin, Access-Control-Request-Method"),
        responseType: 'text'
      })
      .subscribe((data) => {
        this.parseXML(data)
          .then((data) => {
            this.xmlItems = data;
          });
      });
  } 
  parseXML(data: string) {
    return new Promise(resolve => {
      var k: string | number,
      
        //arr:  string[] = as  any;
         arr = [] as any,
        //const result = [] as  any;
        parser = new xml2js.Parser(
          {
            trim: true,
            explicitArray: true
          });
          // @ts-ignore
      parser.parseString(data, function (err,result) { //TODO 
        let obj = result.rss;
        for (k in obj.channel) {
          let itemfeed = obj.channel[k];
          arr.push({
            id: itemfeed.id[0],
            title: itemfeed.title[0],
            link: itemfeed.link[0],
            description: itemfeed.description[0]
          });
        }
        resolve(arr);
      });
    });
  }
}
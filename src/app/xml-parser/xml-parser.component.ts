import { Component } from '@angular/core';
import * as xml2js from 'xml2js';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { analyzeAndValidateNgModules, FormattedMessageChain } from '@angular/compiler';
import { SearchComponent } from '../search/search.component';
//XML PARSER HAS no callbacks
@Component({
  selector: 'app-xml-parser',
  templateUrl: './xml-parser.component.html',
  styleUrls: ['./xml-parser.component.css'],

})

export class XmlParserComponent {
  public xmlItems: any;

  constructor(private http: HttpClient,

    ) {

    this.loadXML();
  }
 // private rssToJsonServiceBaseUrl: string = 'https://rss2json.com/api.json?rss_url=';

  loadXML() { //reading the xml file

    return this.http.get('/assets/feeds.xml',
      {
        headers: new HttpHeaders()
          .set('Content-Type', 'text/xml')
          //.append('Access-Control-Allow-Methods', 'GET')
          .append('Access-Control-Allow-Origin', 'http://localhost:55155')
          .append('Access-Control-Allow-Credentials', 'true')
          .append('Access-Control-Allow-Headers', "Access-Control-Allow-Headers, Access-Control-Allow-Origin, Access-Control-Request-Method"),
        responseType: 'text' as 'text'
      })
      .subscribe(
        (xmldata) => { this.parseXML(xmldata).then(  (xmldata) => {this.xmlItems = xmldata;} );  }
      );
  }
  parseXML(xmldata: string) { //store xml data into array variable
    return new Promise(resolve => {
      let k: string | number,

         arr = [] as any,

        parser = new xml2js.Parser(
          {
            trim: true,
            explicitArray: true
          });
//@ts-ignore
      parser.parseString(xmldata, function (err ,result) { //TODO

        let obj = result.channel;
        for (k in obj.item) {
          let itemfeed = obj.item[k];
          arr.push({
          //  id: itemfeed.id[0],
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



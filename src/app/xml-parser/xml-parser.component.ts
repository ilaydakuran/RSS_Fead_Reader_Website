import { Component } from '@angular/core';
import * as xml2js from 'xml2js';
import { HttpClient, HttpHeaders } from '@angular/common/http';



//XML PARSER HAS no callbacks
@Component({
  selector: 'app-xml-parser',
  templateUrl: './xml-parser.component.html',
  styleUrls: ['./xml-parser.component.css'],

})

export class XmlParserComponent {
  public xmlItems: any;


  constructor(private http: HttpClient) {

    this.loadXML();
  }
 // private rssToJsonServiceBaseUrl: string = 'https://rss2json.com/api.json?rss_url=';

  loadXML() { //reading the xml file

    return this.http.get('https://m.highwaysengland.co.uk/feeds/rss/UnplannedEvents.xml',

      {
        headers: new HttpHeaders()
         // .set('Content-Type', 'test/xml') get olduğu zaman content type'a gerek yokmuş
          //'http://127.0.0.1:4200
         .append('Access-Control-Allow-Origin', '*') //* allows any origin.
        .append('Access-Control-Allow-Method', 'GET') // GET requests can have "Accept" headers
         // .append('Access-Control-Allow-Credentials','true') // bunu kullanırsam origini * yapamıyoruz
          .append('Access-Control-Allow-Headers',
            " Access-Control-Allow-Origin, Access-Control-Allow-Method, Accept"),

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
    //arr:XmlParserComponent[];
        parser = new xml2js.Parser(
          {
            trim: true,
            mergeAttrs : true,
            explicitArray: false
          });

      parser.parseString(xmldata, function (err:any ,result: any) {
       // let feed:any;

        if (err) {
          console.warn(err);
        }
       // feed = result;

        let obj = result.channel;
        // @ts-ignore
        for (k of obj.$item) {
          let itemfeed = obj.$item[k];
          arr.push({
          //  id: itemfeed.id[0],
            title: itemfeed.title[0],
            link: itemfeed.link[0],
            description: itemfeed.description[0]
          });
        //  return feed || { };
        }
        resolve(arr);
      });
    });
  }
}



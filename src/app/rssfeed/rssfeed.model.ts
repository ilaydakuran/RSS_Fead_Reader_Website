/**
 * SearchResult is a data-structure that holds an individual
 * record a video search
 */
 export class SearchResult {
    id: number;
    title: string;
    description: string;
    url: string;
  
    constructor(obj?: any) {
      this.id              = obj && obj.id             || null;
      this.title           = obj && obj.title          || null;
      this.description     = obj && obj.description    || null;
      this.url        = obj && obj.url       || null;
                               
    }
  }

import { Injectable } from '@angular/core';
import { HttpClient  } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
  })

  export class NewsService {

    constructor(private http:HttpClient) { }


    getById(id):Observable<any>{
        return this.http.get(`https://tv8.md/wp-json/wp/v2/posts/${id}`);
    }

  }


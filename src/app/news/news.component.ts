import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit {
  apiURL = 'https://tv8.md/wp-json/wp/v2/posts/';
  apiData;

  constructor(private http: HttpClient) { 

  }

  ngOnInit(){
    this.http.get(this.apiURL).subscribe((data)=> {
      console.log(data);
      this.apiData = data;
  })
}

}

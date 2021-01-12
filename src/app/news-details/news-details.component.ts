import { from } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { NewsService} from '../news.service';

@Component({
  selector: 'app-news-details',
  templateUrl: './news-details.component.html',
  styleUrls: ['./news-details.component.css']
})
export class NewsDetailsComponent implements OnInit {
  apiURL = 'https://tv8.md/wp-json/wp/v2/posts/';
  apiData;
    data_Id ="";
    title="";
    news;
    
  constructor(private router :ActivatedRoute, 
    private http: HttpClient,
    private newsService: NewsService
    ) { }

  ngOnInit(): void {

    this.http.get(this.apiURL).subscribe((data)=> {
      console.log(data);
      this.apiData = data;

  })

    console.log(this.router.snapshot.params);
    this.data_Id = this.router.snapshot.params.id; 
    const newsId = +this.router.snapshot.paramMap.get('id');
    this.newsService.getById(newsId)
    .subscribe(
      data=> this.news = data
    )
    
  }

}

import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {NgxPaginationModule} from 'ngx-pagination';
import {ActivatedRoute} from '@angular/router';
import { NewsService} from '../news.service';
import { NgxSpinnerService } from "ngx-spinner";  


@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit {
  apiURL = 'https://tv8.md/wp-json/wp/v2/posts/';
  apiMediaURL = "https://tv8.md/wp-json/wp/v2/media";
  apiData;
  apiMediaData;
  imageToShow: any;
  media$;
  p: Number = 1;


  constructor(private http: HttpClient, private router :ActivatedRoute,  private newsService: NewsService,  private SpinnerService: NgxSpinnerService) { 

  }

  ngOnInit(){
    this.SpinnerService.show();
    this.http.get(this.apiURL).subscribe((data)=> {
      console.log(data);
      this.apiData = data;
      this.SpinnerService.hide();  
  })


  this.http.get(this.apiMediaURL).subscribe((resp) => {
    console.log("media-data",resp)    
    this.apiMediaData = resp;
   
     
  })

  this.media$ = this.newsService.fetchImages();

}

}

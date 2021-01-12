import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NewsComponent } from './news/news.component';
import { NewsDetailsComponent } from './news-details/news-details.component';
import { AppComponent } from './app.component';

const routes: Routes = [

  {
    path: 'news',
    component: NewsComponent 
  },
  {
    path: 'news-details/:id',
    component: NewsDetailsComponent 
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { CategorynewsComponent } from './pages/categorynews/categorynews.component';
import { NewsComponent } from './pages/news/news.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'category/:categoryslug', component: CategorynewsComponent },
  { path: 'news/:newsid', component: NewsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

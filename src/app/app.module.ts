import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { CategoriesService } from './services/categories.service';
import { AllnewsService } from './services/allnews.service';
import { CategoryallnewsService } from './services/categoryallnews.service';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './layout/header/header.component';
import { NavheaderComponent } from './navheader/navheader.component';
import { CatcardComponent } from './components/catcard/catcard.component';
import { HomeComponent } from './pages/home/home.component';
import { CategoriesCardComponent } from './components/categories-card/categories-card.component';
import { NewsCardMetaComponent } from './components/news-card-meta/news-card-meta.component';
import { CategorynewsComponent } from './pages/categorynews/categorynews.component';
import { CatheaderComponent } from './components/catheader/catheader.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NavheaderComponent,
    CatcardComponent,
    HomeComponent,
    CategoriesCardComponent,
    NewsCardMetaComponent,
    CategorynewsComponent,
    CatheaderComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
  providers: [CategoriesService, AllnewsService, CategoryallnewsService],
  bootstrap: [AppComponent],
})
export class AppModule {}

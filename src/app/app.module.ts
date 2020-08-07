import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { CategoriesService } from './categories.service';
import { AllnewsService } from './allnews.service';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './layout/header/header.component';
import { NavheaderComponent } from './navheader/navheader.component';
import { CatcardComponent } from './catcard/catcard.component';
import { HomeComponent } from './pages/home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NavheaderComponent,
    CatcardComponent,
    HomeComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
  providers: [CategoriesService, AllnewsService],
  bootstrap: [AppComponent],
})
export class AppModule {}

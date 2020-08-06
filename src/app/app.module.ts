import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './layout/header/header.component';
import { NavheaderComponent } from './navheader/navheader.component';
import { CatcardComponent } from './catcard/catcard.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NavheaderComponent,
    CatcardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

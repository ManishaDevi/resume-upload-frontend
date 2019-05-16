
import { HttpClient, HttpHandler, HttpHeaders, HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Services } from '@angular/core/src/view';
import { ApiService } from '../services/api.service';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    ApiService,
    HttpClient
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

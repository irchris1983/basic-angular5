import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module'
import { AboutComponent } from './components/About/about.component';
import { ControlComponent } from './components/Control/control.component';
import { LoginComponent } from './components/Login/login.component';


@NgModule({

  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule    
  ],

  declarations: [
    AppComponent, AboutComponent, LoginComponent, ControlComponent
  ],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { AboutComponent } from './components/About/about.component';
import { ControlComponent } from './components/Control/control.component';
import { LoginComponent } from './components/Login/login.component';
import { Control2Component } from './components/Control2/control2/control2.component';


@NgModule({

  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    HttpModule
  ],

  declarations: [
    AppComponent, AboutComponent, LoginComponent, ControlComponent, Control2Component
  ],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

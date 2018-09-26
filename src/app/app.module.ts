import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AboutComponent } from './About/about.component';
import { HelpComponent } from './Help/help.component';
import { LoginComponent } from './Login/login.component';


@NgModule({
  declarations: [
    AppComponent, AboutComponent, HelpComponent, LoginComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

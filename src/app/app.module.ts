import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { AboutComponent } from './About/about.component';
// import { HelpComponent } from './Help/help.component';
import { LoginComponent } from './Login/login.component';

const appRoutes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'about/:num', component: AboutComponent },
];

@NgModule({

  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    )
  ],

  declarations: [
    AppComponent, AboutComponent, LoginComponent
  ],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

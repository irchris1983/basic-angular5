import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { AboutComponent } from './components/About/about.component';
import { ControlComponent } from './components/Control/control.component';
import { LoginComponent } from './components/Login/login.component';
import { Control2Component } from './components/Control2/control2/control2.component';

const appRoutes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'control', component: ControlComponent},
  { path: 'about', component: AboutComponent },
  { path: '**', redirectTo: 'login' }
];

@NgModule({

  imports: [
    BrowserModule,
    HttpClientModule,
    HttpModule,

    RouterModule.forRoot(appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    )
  ],

  declarations: [
    AppComponent, AboutComponent, LoginComponent, ControlComponent, Control2Component
  ],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

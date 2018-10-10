import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AboutComponent } from './components/About/about.component';
import { LoginComponent } from './components/Login/login.component';
import { ControlComponent } from './components/Control/control.component';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'control', component: ControlComponent},
  { path: 'about', component: AboutComponent },
  { path: '**', redirectTo: 'login' }
];

@NgModule({
    imports: [ RouterModule.forRoot(routes) ],
    exports: [ RouterModule ]
})

export class AppRoutingModule {}

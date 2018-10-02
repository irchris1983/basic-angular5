import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AboutComponent } from './About/about.component';
import { LoginComponent } from './Login/login.component';
import { ControlComponent } from './Control/control.component';

const routes: Routes = [
  { path: '/login', component: LoginComponent },
  { path: '/control', component: ControlComponent },
  { path: '/about', component: AboutComponent },
  { path: '', redirectTo: '/login', pathMatch: 'full' },
];

@NgModule({
    imports: [ RouterModule.forRoot(routes) ],
    exports: [ RouterModule ]
})
export class AppRoutingModule {}


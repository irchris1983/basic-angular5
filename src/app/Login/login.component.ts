import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'; 

import { AppService } from '../app.service'

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
    username = '';
    
    constructor(private router: Router, private service: AppService) { }
    
    ngOnInit(): void {
        this.service.setTitle('Login');
    }

    login(): void {
        this.service.setDetails(this.username);
        this.service.setTitle('Control');
        this.router.navigate(['control']);
    }

    keyEntry(value: string) {
        this.username = value;
      }
}



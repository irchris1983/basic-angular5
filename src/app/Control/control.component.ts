import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { AppService } from '../app.service'
import { Globals, LoginDetails } from '../globals';

@Component({
    selector: 'app-control',
    templateUrl: './control.component.html',
    styleUrls: ['./control.component.scss']
})
export class ControlComponent implements OnInit {
    val: Globals;
    user: LoginDetails;
    constructor(private router: Router, private service: AppService) { }

    ngOnInit(): void {
        this.getnum(); 
    }

    getnum(): void {
        this.service.getValues().subscribe(val => this.val = val);
        this.service.getDetails().subscribe(val => this.user = val);
    }

    next():void{
        this.service.setTitle('About');
        this.router.navigate(['about']);
    }

    previous(): void{
        this.service.setTitle('Login');
        this.router.navigate(['login']);
    }

}

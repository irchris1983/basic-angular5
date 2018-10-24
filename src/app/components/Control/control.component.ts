import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { AppService } from '../../app.service';
import { Globals, LoginDetails, Config, User } from '../../globals';
import { ControlService } from '../../services/control.service';


@Component({
    selector: 'app-control',
    templateUrl: './control.component.html',
    styleUrls: ['./control.component.scss']
})
export class ControlComponent implements OnInit {
    val: Globals;
    user: LoginDetails;
    config: Config;
    usr: string;

    constructor(
        private router: Router,
        private service: AppService,
        private compService: ControlService
        ) { }

    ngOnInit(): void {
        this.service.getValues().subscribe(val => this.val = val);
        this.service.getDetails().subscribe(val => this.user = val);
        // this.compService.getConfig().subscribe(responseData => console.log(responseData));
        this.compService.getUser().subscribe(responseData => console.log(responseData));
        this.compService.setUser('test');
        // this.setUser('ChristopherColeman');
        // this.getConfig();
        this.getUser();
    }

    next(): void {
        this.service.setTitle('About');
        this.router.navigate(['about']);
    }

    previous(): void {
        this.service.setTitle('Login');
        this.router.navigate(['login']);
    }

    getConfig() {
        // this.compService.getConfig().subscribe(val => this.config = val);
    }

    getUser() {
        this.compService.getUser().subscribe(val => this.usr = val);
    }

    setUser( user: string ) {
        this.compService.setUser(user);
    }
}

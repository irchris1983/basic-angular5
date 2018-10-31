import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { AppService } from '../../app.service';
import { Globals, LoginDetails, Config } from '../../globals';
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

    constructor(
        private router: Router,
        private service: AppService,
        private compService: ControlService
        ) { }

    ngOnInit(): void {
        this.service.setTitle('Control');
        // this.compService.getConfig().subscribe(responseData => console.log(responseData));
        // this.compService.getUser().subscribe(responseData => console.log(responseData));
        // this.compService.setUser('testing');
        // this.getConfig();
        this.getUser();
    }

    next(): void {
        this.service.setTitle('About');
        this.router.navigate(['about']);
    }

    previous(): void {
        this.router.navigate(['login']);
    }

    getConfig() {
        this.compService.getConfig().subscribe(val => this.config = val);
    }

    getUser() {
        this.compService.getUser().subscribe(val => this.user = val);
    }

    setUser( user: string ) {
        this.compService.setUser(user);
    }
}

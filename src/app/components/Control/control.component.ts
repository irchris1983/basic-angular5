import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { AppService } from '../../app.service';
import { Globals, LoginDetails, Config } from '../../globals';
import { ComponentService } from '../component.service';

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
        private compService: ComponentService
        ) { }

    ngOnInit(): void {
        this.service.getValues().subscribe(val => this.val = val);
        this.service.getDetails().subscribe(val => this.user = val);
        // this.compService.getConfig().subscribe(val => this.config = val);
    }

    next(): void {
        this.service.setTitle('About');
        this.router.navigate(['about']);
    }

    previous(): void {
        this.service.setTitle('Login');
        this.router.navigate(['login']);
    }

}

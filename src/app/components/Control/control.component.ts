import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { AppService } from '../../app.service';
import { Globals, LoginDetails, Config, Service } from '../../globals';
import { ControlService } from '../../services/control.service';
import { analyzeAndValidateNgModules } from '@angular/compiler';


@Component({
    selector: 'app-control',
    templateUrl: './control.component.html',
    styleUrls: ['./control.component.scss']
})
export class ControlComponent implements OnInit {
    val: Globals;
    user: LoginDetails;
    config: Config;
    value: Service;

    constructor(
        private router: Router,
        private service: AppService,
        private compService: ControlService

        ) { }

    ngOnInit(): void {
        this.service.getValues().subscribe(val => this.val = val);
        this.service.getDetails().subscribe(val => this.user = val);
        this.compService.getConfig().subscribe(responseData => console.log(responseData));
        this.getConfig();
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
        this.compService.getConfig().subscribe(val => this.value = val);
        // this.compService.getConfig().subscribe(val => this.config = val);
    }
}

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { AppService } from '../../app.service';
import { ControlService } from '../../services/control.service';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
    username = '';

    constructor(
        private router: Router,
        private service: AppService,
        private compService: ControlService
        ) { }

    ngOnInit(): void {
        this.service.setTitle('Login');
    }

    login(): void {
        // this.service.setDetails(this.username);

        this.router.navigate(['control']);
        this.compService.setUser(this.username);
    }

    keyEntry(value: string) {
        this.username = value;
      }
}



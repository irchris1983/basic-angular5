import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
    Username = '';
    @Output() user = new EventEmitter<string>();
    constructor() { }

    ngOnInit(): void {
        this.user.emit('Login as user');
    }

    login(): void {
        this.user.emit('Username: ' + this.Username);
    }

    keyEntry(value: string) {
        this.Username = value;
      }
}



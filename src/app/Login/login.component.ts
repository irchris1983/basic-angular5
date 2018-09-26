import { Component, OnInit, Output, EventEmitter } from '@angular/core';

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

    onKey(value: string) {
        this.Username = value;
      }
}



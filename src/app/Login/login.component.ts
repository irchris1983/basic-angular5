import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router'; 

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
    Username = '';
    @Output() user = new EventEmitter<string>();
    constructor(private route: ActivatedRoute, private router: Router) { }
    //private route: ActivatedRoute, private router: Router
    ngOnInit(): void {
        this.user.emit('Login as user');
    }

    login(): void {
        this.user.emit('Username: ' + this.Username);
        this.router.navigate(['about/12']);
    }

    keyEntry(value: string) {
        this.Username = value;
      }
}



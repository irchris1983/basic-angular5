import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router'; 
import { AppService } from '../app.service'

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
    username = '';
    @Output() user = new EventEmitter<string>();
    constructor(private route: ActivatedRoute, private router: Router, private service: AppService) { }
    
    ngOnInit(): void {
        this.user.emit('Login as user');
    }

    login(): void {
        this.user.emit('Username: ' + this.username);
        this.service.setDetails(this.username);
        this.router.navigate(['about']);
    }

    keyEntry(value: string) {
        this.username = value;
      }
}



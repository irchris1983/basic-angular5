import { Component, Output, EventEmitter, OnChanges } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AppService } from '../app.service';
import { Globals, LoginDetails} from '../globals';

@Component({
    selector: 'app-about',
    templateUrl: './about.component.html',
    styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnChanges {
    //@Input() num = Number;
    @Output() hidebtn = new EventEmitter<boolean>();
    val: Globals;
    user: LoginDetails;
    constructor(private route: ActivatedRoute, private router: Router, private service: AppService) {
      }

    ngOnInit() {
        this.getnum();  
    }

    ngOnChanges(): void {
        this.hidebtn.emit(false);
    }

    previous(): void{
        this.router.navigate(['login']);
    }

    getnum(): void {
        this.service.getValues().subscribe(val => this.val = val);
        this.service.getDetails().subscribe(val => this.user = val);
    }
}

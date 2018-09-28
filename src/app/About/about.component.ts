import { Component, Input, Output, EventEmitter, OnChanges } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AppService } from '../app.service';
import { Globals } from '../globals';

@Component({
    selector: 'app-about',
    templateUrl: './about.component.html',
    styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnChanges {
    //@Input() num = Number;
    @Output() hidebtn = new EventEmitter<boolean>();
    num = 0;
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
        this.num = 5;
        //this.service.getValues();
        
    }
}

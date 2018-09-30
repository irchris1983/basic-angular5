import { Component, Output, EventEmitter, OnChanges } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AppService } from '../app.service';


@Component({
    selector: 'app-about',
    templateUrl: './about.component.html',
    styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnChanges {
    //@Input() num = Number;
    @Output() hidebtn = new EventEmitter<boolean>();
    
    constructor(private route: ActivatedRoute, private router: Router, private service: AppService) {
      }

    ngOnInit() {          
    }

    ngOnChanges(): void {
        this.hidebtn.emit(false);
    }

    previous(): void{
        this.service.setTitle('Control');
        this.router.navigate(['control']);
    }

    
}

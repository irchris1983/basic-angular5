import { Component, OnChanges } from '@angular/core';
import { Router } from '@angular/router';
import { AppService } from '../../app.service';


@Component({
    selector: 'app-about',
    templateUrl: './about.component.html',
    styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnChanges {
    constructor(private router: Router, private service: AppService) {
      }

    ngOnChanges(): void {
    }

    previous(): void {
        this.service.setTitle('Control');
        this.router.navigate(['control']);
    }


}

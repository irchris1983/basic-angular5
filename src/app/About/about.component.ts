import { Component, OnInit, Input, Output, EventEmitter, OnChanges } from '@angular/core';

@Component({
    selector: 'app-about',
    templateUrl: './about.component.html',
    styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnChanges {
    @Input() num = Number;
    @Output() hidebtn = new EventEmitter<boolean>();
    constructor() {
      }

    ngOnChanges(): void {
        this.hidebtn.emit(false);
    }


}

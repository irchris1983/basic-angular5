import { Component, Input } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // @Input() btn = 'hidebtn';
  title = 'Test the update';
  btn = true;
  val = 0;

  onClick(): void {
    this.title = 'Test successful';
    // this.btn = true;
    this.val = 100;
  }
}

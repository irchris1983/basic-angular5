import { Component, Input } from '@angular/core';
import { AppService } from './app.service';
import { Globals } from './globals';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  btn = true;
  val = 0;

  onClick(): void {
      this.val = 100;
  }
}

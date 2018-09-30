import { Component, OnInit} from '@angular/core';

import { AppService } from './app.service'
import { Title } from './globals';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  btn = true;
  title: Title;
  constructor(private service: AppService ){}

  ngOnInit(): void {
    this.service.getTitle().subscribe(val => this.title = val);
    
  }
}

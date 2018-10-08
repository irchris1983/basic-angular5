import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Control2Component } from './control2.component';

describe('Control2Component', () => {
  let component: Control2Component;
  let fixture: ComponentFixture<Control2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Control2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Control2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

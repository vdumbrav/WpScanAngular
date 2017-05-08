import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PluguinComponent } from './pluguin.component';

describe('PluguinComponent', () => {
  let component: PluguinComponent;
  let fixture: ComponentFixture<PluguinComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PluguinComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PluguinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

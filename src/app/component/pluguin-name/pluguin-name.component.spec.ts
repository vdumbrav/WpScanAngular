import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PluguinNameComponent } from './pluguin-name.component';

describe('PluguinNameComponent', () => {
  let component: PluguinNameComponent;
  let fixture: ComponentFixture<PluguinNameComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PluguinNameComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PluguinNameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ThemeNameComponent } from './theme-name.component';

describe('ThemeNameComponent', () => {
  let component: ThemeNameComponent;
  let fixture: ComponentFixture<ThemeNameComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ThemeNameComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ThemeNameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

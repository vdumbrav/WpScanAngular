import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SiteWpComponent } from './site-wp.component';

describe('SiteWpComponent', () => {
  let component: SiteWpComponent;
  let fixture: ComponentFixture<SiteWpComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SiteWpComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SiteWpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoVultypeComponent } from './info-vultype.component';

describe('InfoVultypeComponent', () => {
  let component: InfoVultypeComponent;
  let fixture: ComponentFixture<InfoVultypeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InfoVultypeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InfoVultypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

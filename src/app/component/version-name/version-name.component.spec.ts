import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VersionNameComponent } from './version-name.component';

describe('VersionNameComponent', () => {
  let component: VersionNameComponent;
  let fixture: ComponentFixture<VersionNameComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VersionNameComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VersionNameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

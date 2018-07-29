import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SportsdetailsComponent } from './sportsdetails.component';

describe('SportsdetailsComponent', () => {
  let component: SportsdetailsComponent;
  let fixture: ComponentFixture<SportsdetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SportsdetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SportsdetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

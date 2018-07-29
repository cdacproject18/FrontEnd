import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConcertsdetailsComponent } from './concertsdetails.component';

describe('ConcertsdetailsComponent', () => {
  let component: ConcertsdetailsComponent;
  let fixture: ComponentFixture<ConcertsdetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConcertsdetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConcertsdetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListOfHospitalsComponent } from './list-of-hospitals.component';

describe('ListOfHospitalsComponent', () => {
  let component: ListOfHospitalsComponent;
  let fixture: ComponentFixture<ListOfHospitalsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListOfHospitalsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListOfHospitalsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

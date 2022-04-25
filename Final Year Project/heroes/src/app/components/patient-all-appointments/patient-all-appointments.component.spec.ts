import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PatientAllAppointmentsComponent } from './patient-all-appointments.component';

describe('PatientAllAppointmentsComponent', () => {
  let component: PatientAllAppointmentsComponent;
  let fixture: ComponentFixture<PatientAllAppointmentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PatientAllAppointmentsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PatientAllAppointmentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

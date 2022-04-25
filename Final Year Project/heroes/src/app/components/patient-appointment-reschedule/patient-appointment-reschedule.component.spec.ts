import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PatientAppointmentRescheduleComponent } from './patient-appointment-reschedule.component';

describe('PatientAppointmentRescheduleComponent', () => {
  let component: PatientAppointmentRescheduleComponent;
  let fixture: ComponentFixture<PatientAppointmentRescheduleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PatientAppointmentRescheduleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PatientAppointmentRescheduleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

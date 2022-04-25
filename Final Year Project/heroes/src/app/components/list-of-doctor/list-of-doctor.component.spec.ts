import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListOfDoctorComponent } from './list-of-doctor.component';

describe('ListOfDoctorComponent', () => {
  let component: ListOfDoctorComponent;
  let fixture: ComponentFixture<ListOfDoctorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListOfDoctorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListOfDoctorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

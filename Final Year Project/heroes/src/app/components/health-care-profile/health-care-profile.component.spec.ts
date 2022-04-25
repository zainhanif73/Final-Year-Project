import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HealthCareProfileComponent } from './health-care-profile.component';

describe('HealthCareProfileComponent', () => {
  let component: HealthCareProfileComponent;
  let fixture: ComponentFixture<HealthCareProfileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HealthCareProfileComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HealthCareProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

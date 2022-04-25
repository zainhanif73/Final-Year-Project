import { TestBed } from '@angular/core/testing';

import { DoctorAuthGuardService } from './doctor-auth-guard.service';

describe('DoctorAuthGuardService', () => {
  let service: DoctorAuthGuardService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DoctorAuthGuardService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

import { TestBed } from '@angular/core/testing';

import { AdminAuthGaurdService } from './admin-auth-gaurd.service';

describe('AdminAuthGaurdService', () => {
  let service: AdminAuthGaurdService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AdminAuthGaurdService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

import { TestBed } from '@angular/core/testing';

import { LoginutilService } from './loginutil.service';

describe('LoginutilService', () => {
  let service: LoginutilService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LoginutilService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

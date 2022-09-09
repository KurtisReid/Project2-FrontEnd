import { TestBed } from '@angular/core/testing';

import { GradeutilService } from './gradeutil.service';

describe('GradeutilService', () => {
  let service: GradeutilService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GradeutilService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

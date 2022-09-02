import { TestBed } from '@angular/core/testing';

import { StudentutilService } from './studentutil.service';

describe('StudentutilService', () => {
  let service: StudentutilService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StudentutilService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

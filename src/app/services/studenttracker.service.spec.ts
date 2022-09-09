import { TestBed } from '@angular/core/testing';

import { StudenttrackerService } from './studenttracker.service';

describe('StudenttrackerService', () => {
  let service: StudenttrackerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StudenttrackerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

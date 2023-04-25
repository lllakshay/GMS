import { TestBed } from '@angular/core/testing';

import { ListComplaintService } from './list-complaint.service';

describe('ListComplaintService', () => {
  let service: ListComplaintService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ListComplaintService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

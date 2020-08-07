import { TestBed } from '@angular/core/testing';

import { AllnewsService } from './allnews.service';

describe('AllnewsService', () => {
  let service: AllnewsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AllnewsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

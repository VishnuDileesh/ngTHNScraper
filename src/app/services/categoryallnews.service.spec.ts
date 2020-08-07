import { TestBed } from '@angular/core/testing';

import { CategoryallnewsService } from './categoryallnews.service';

describe('CategoryallnewsService', () => {
  let service: CategoryallnewsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CategoryallnewsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

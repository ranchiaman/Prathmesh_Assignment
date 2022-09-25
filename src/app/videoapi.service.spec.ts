import { TestBed } from '@angular/core/testing';

import { VideoapiService } from './videoapi.service';

describe('VideoapiService', () => {
  let service: VideoapiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(VideoapiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

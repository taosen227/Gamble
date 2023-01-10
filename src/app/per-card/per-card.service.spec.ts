import { TestBed } from '@angular/core/testing';

import { PerCardService } from './per-card.service';

describe('PerCardService', () => {
  let service: PerCardService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PerCardService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

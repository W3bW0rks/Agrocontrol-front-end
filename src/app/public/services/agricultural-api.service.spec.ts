import { TestBed } from '@angular/core/testing';

import { AgriculturalApiService } from './agricultural-api.service';

describe('AgriculturalApiService', () => {
  let service: AgriculturalApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AgriculturalApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

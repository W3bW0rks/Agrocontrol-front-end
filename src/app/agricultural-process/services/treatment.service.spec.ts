import { TestBed } from '@angular/core/testing';

import { CropTreatmentService } from './crop-treatment.service';

describe('TreatmentService', () => {
  let service: CropTreatmentService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CropTreatmentService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

import { TestBed } from '@angular/core/testing';

import { CropTreatmentService } from './crop-treatment.service';

describe('CropTreatmentService', () => {
  let service: CropTreatmentService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CropTreatmentService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

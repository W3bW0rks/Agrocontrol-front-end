import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CropTreatmentFormComponent } from './crop-treatment-form.component';

describe('CropTreatmentFormComponent', () => {
  let component: CropTreatmentFormComponent;
  let fixture: ComponentFixture<CropTreatmentFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CropTreatmentFormComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CropTreatmentFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

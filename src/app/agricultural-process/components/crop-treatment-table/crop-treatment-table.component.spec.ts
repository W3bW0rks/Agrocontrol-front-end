import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CropTreatmentTableComponent } from './crop-treatment-table.component';

describe('CropTreatmentTableComponent', () => {
  let component: CropTreatmentTableComponent;
  let fixture: ComponentFixture<CropTreatmentTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CropTreatmentTableComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CropTreatmentTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

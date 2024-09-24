import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardTreatmentDetailsComponent } from './card-treatment-details.component';

describe('CardTreatmentDetailsComponent', () => {
  let component: CardTreatmentDetailsComponent;
  let fixture: ComponentFixture<CardTreatmentDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CardTreatmentDetailsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardTreatmentDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardIrrigationDetailsComponent } from './card-irrigation-details.component';

describe('CardIrrigationDetailsComponent', () => {
  let component: CardIrrigationDetailsComponent;
  let fixture: ComponentFixture<CardIrrigationDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CardIrrigationDetailsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardIrrigationDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

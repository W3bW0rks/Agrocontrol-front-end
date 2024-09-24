import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardPlantationComponent } from './card-plantation.component';

describe('CardPlantationComponent', () => {
  let component: CardPlantationComponent;
  let fixture: ComponentFixture<CardPlantationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CardPlantationComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardPlantationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

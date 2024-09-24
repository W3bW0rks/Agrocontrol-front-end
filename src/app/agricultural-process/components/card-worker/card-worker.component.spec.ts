import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardWorkerComponent } from './card-worker.component';

describe('CardWorkerComponent', () => {
  let component: CardWorkerComponent;
  let fixture: ComponentFixture<CardWorkerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CardWorkerComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardWorkerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

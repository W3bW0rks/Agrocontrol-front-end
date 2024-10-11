import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FinancesViewComponent } from './finances-view.component';

describe('FinancesViewComponent', () => {
  let component: FinancesViewComponent;
  let fixture: ComponentFixture<FinancesViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FinancesViewComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FinancesViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

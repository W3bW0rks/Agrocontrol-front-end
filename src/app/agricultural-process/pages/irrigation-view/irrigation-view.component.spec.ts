import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IrrigationViewComponent } from './irrigation-view.component';

describe('IrrigationViewComponent', () => {
  let component: IrrigationViewComponent;
  let fixture: ComponentFixture<IrrigationViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IrrigationViewComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IrrigationViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

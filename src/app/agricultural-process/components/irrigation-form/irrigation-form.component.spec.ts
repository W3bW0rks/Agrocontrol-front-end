import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IrrigationFormComponent } from './irrigation-form.component';

describe('IrrigationFormComponent', () => {
  let component: IrrigationFormComponent;
  let fixture: ComponentFixture<IrrigationFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IrrigationFormComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IrrigationFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

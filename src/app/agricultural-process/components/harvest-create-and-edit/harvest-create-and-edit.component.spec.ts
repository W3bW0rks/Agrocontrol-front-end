import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HarvestCreateAndEditComponent } from './harvest-create-and-edit.component';

describe('HarvestCreateAndEditComponent', () => {
  let component: HarvestCreateAndEditComponent;
  let fixture: ComponentFixture<HarvestCreateAndEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HarvestCreateAndEditComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HarvestCreateAndEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

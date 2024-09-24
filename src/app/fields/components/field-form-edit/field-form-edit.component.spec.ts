import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FieldFormComponent } from './field-form-edit.component';

describe('FieldFormEditComponent', () => {
  let component: FieldFormComponent;
  let fixture: ComponentFixture<FieldFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FieldFormComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FieldFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

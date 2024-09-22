import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkersTablePopUpComponent } from './workers-table-pop-up.component';

describe('WorkersTablePopUpComponent', () => {
  let component: WorkersTablePopUpComponent;
  let fixture: ComponentFixture<WorkersTablePopUpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WorkersTablePopUpComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WorkersTablePopUpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

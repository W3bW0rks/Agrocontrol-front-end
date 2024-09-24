import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductsTablePopUpComponent } from './products-table-pop-up.component';

describe('ProductsTablePopUpComponent', () => {
  let component: ProductsTablePopUpComponent;
  let fixture: ComponentFixture<ProductsTablePopUpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProductsTablePopUpComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductsTablePopUpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import {Component, Input} from '@angular/core';
import { NgIf } from "@angular/common";

import {
  ProductsProcessComponent
} from "../../../agricultural-process/components/products-process/products-process.component";

@Component({
  selector: 'app-products-table-pop-up',
  standalone: true,
  imports: [
    ProductsProcessComponent,
    NgIf
  ],
  templateUrl: './products-table-pop-up.component.html',
  styleUrl: './products-table-pop-up.component.css'
})

export class ProductsTablePopUpComponent {

  @Input()
  isModalOpen: boolean = false;

  @Input()
  productsUsed!: Array<any>;

}

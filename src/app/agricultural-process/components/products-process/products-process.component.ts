import {Component, inject, Input} from '@angular/core';
import { ProductsService } from "../../services/products.service";
import { Observable, Subscription } from "rxjs";
import { NgForOf } from "@angular/common";

@Component({
  selector: 'app-products-process',
  standalone: true,
  imports: [
    NgForOf
  ],
  templateUrl: './products-process.component.html',
  styleUrl: './products-process.component.css'
})

export class ProductsProcessComponent {

  private _productService: ProductsService = inject(ProductsService);

  @Input()
  productsProcess: any;

  productNames: string[] = [];

  async ngOnInit() {
    await this.loadProductNames();
  }

  async loadProductNames() {
    const promises = this.productsProcess.map((product: any)=> this._productService.getById(product.productId).toPromise());
    const results = await Promise.all(promises);
    this.productNames = results.map(response => response!.name);
  }
}

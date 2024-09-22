import {Component, inject, Input, ViewChild} from '@angular/core';
import {MatFormField, MatLabel} from "@angular/material/form-field";
import {MatInput} from "@angular/material/input";
import {MatOption} from "@angular/material/core";
import {MatSelect} from "@angular/material/select";
import {NgForOf, NgIf} from "@angular/common";
import {FormsModule, NgForm} from "@angular/forms";
import {MatButton} from "@angular/material/button";
import {CropTreatment} from "../../models/crop-treatment.entity";
import {CropTreatmentService} from "../../services/crop-treatment.service";
import {WorkerService} from "../../../fields/services/worker.service";
import {ProductsService} from "../../services/products.service";

@Component({
  selector: 'app-crop-treatment-form',
  standalone: true,
  imports: [
    FormsModule,
    MatFormField,
    MatInput,
    MatLabel,
    MatSelect,
    MatOption,
    MatButton,
    NgForOf,
    NgIf
  ],
  templateUrl: './crop-treatment-form.component.html',
  styleUrl: './crop-treatment-form.component.css'
})
export class CropTreatmentFormComponent {
  @Input() agriculturalProcessId!: number;
  @Input() date!: string;
  success = false;
  cropTreatment!: CropTreatment;
  @ViewChild('cropTreatmentForm', { static: false }) cropTreatmentForm!: NgForm;
  userProducts: any = [];
  products: { productId: number; quantity: number }[] = [
    { productId: 0, quantity: 0 }
  ];
  fieldWorkers: any = [];
  workers: { workerId: number; cost: number }[] = [
    { workerId: 0, cost: 0 }
  ];
  cropTreatmentService: CropTreatmentService = inject(CropTreatmentService);
  workerService: WorkerService = inject(WorkerService);
  productService: ProductsService = inject(ProductsService);
  showWarning = false;

  constructor() {
    this.cropTreatment = new CropTreatment({});
    this.getProducts();
    this.getWorkers();
  }

  private resetForm() {
    this.cropTreatmentForm.resetForm();
    this.cropTreatment = new CropTreatment({});
    this.workers = [
      { workerId: 0, cost: 0 }
    ]; // Reset workers array
    this.products = [
      { productId: 0, quantity: 0 }
    ]; // Reset products array
  }

  onSubmit() {
    if (this.cropTreatmentForm.form.valid && this.isWorkersAndProductsValid()) {
      this.cropTreatment.agriculturalProcessId = this.agriculturalProcessId;
      this.cropTreatment.date = this.date;
      // Filtra los trabajadores válidos
      this.cropTreatment.workers = this.workers;
      // Filtra los productos válidos
      this.cropTreatment.productsUsed = this.products;
      this.cropTreatmentService.create(this.cropTreatment).subscribe((response: any) => {
        console.log('Crop Treatment created', response);
        this.success = true;
      }, error => {
        console.error('Error creating crop treatment', error);
      });

      this.success = true;
      this.resetForm();
    } else {
      console.log('Form is invalid');
      this.showWarning = true;
    }
  }

  getWorkers() {
    this.workerService.getAll().subscribe((workers: any) => {
      this.fieldWorkers = workers;
    });
  }

  getProducts() {
    this.productService.getAll().subscribe((products: any) => {
      this.userProducts = products;
    });
  }

  isWorkersAndProductsValid() {
    return this.workers.every(worker => worker.workerId !== 0 && worker.cost > 0)
      && this.products.every(product => product.productId !== 0 && product.quantity > 0);
  }

  addWorker() {
    this.workers.push({ workerId: 0, cost: 0 });
  }

  addProduct() {
    this.products.push({ productId: 0, quantity: 0 });
  }

  removeWorker(index: number) {
    if (this.workers.length > 1) {
      this.workers.splice(index, 1); // Remove the worker at the specified index
    }
  }

  removeProduct(index: number) {
    if (this.products.length > 1) {
      this.products.splice(index, 1); // Remove the product at the specified index
    }
  }

  calculateTotalCost() {
    this.cropTreatment.totalWorkersCost = this.workers.reduce((acc, worker) => acc + (worker.cost || 0), 0);
    console.log('Total Workers Cost:', this.cropTreatment.totalWorkersCost);
  }


  onCancel() {
    this.resetForm();
    this.success = false;
  }
}

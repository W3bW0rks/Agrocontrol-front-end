import {Component, Input} from '@angular/core';
import { CropTreatment } from "../../models/crop-treatment.entity";
import {NgForOf} from "@angular/common";
import {
  ProductsTablePopUpComponent
} from "../../../fields/components/products-table-pop-up/products-table-pop-up.component";

@Component({
  selector: 'app-crop-treatment-table',
  standalone: true,
  imports: [
    NgForOf,
    ProductsTablePopUpComponent
  ],
  templateUrl: './crop-treatment-table.component.html',
  styleUrl: './crop-treatment-table.component.css'
})

export class CropTreatmentTableComponent {

  @Input()
  treatments!: Array<CropTreatment>;

  selectedTreatments: any[] = [];

  displayedColumns: string[] = ['date', 'treatmentType', 'productsUsed'];

  isModalOpen: boolean = false;

  openModal(treatments: any[]) {
    this.selectedTreatments = treatments;
    this.isModalOpen = true;
  }

  closeModal() {
    this.isModalOpen = false;
  }

}

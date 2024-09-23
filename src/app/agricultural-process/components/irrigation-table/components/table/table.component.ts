import {Component, Input} from '@angular/core';
import { MatTableModule } from '@angular/material/table';
import {Irrigation} from "../../../../models/irrigation.entity";
import {NgForOf} from "@angular/common";
import {
  WorkersTablePopUpComponent
} from "../../../../../fields/components/workers-table-pop-up/workers-table-pop-up.component";

@Component({
  selector: 'app-table',
  standalone: true,
  imports: [
    MatTableModule,
    NgForOf,
    WorkersTablePopUpComponent
  ],
  templateUrl: './table.component.html',
  styleUrl: './table.component.css'
})

export class TableComponent {

  @Input()
  irrigations!: Array<Irrigation>;

  selectedWorkers: any[] = [];

  displayedColumns: string[] = ['date', 'hoursIrrigated', 'workers'];

  isModalOpen: boolean = false;

  openModal(workers: any[]) {
    this.selectedWorkers = workers; // Asigna los trabajadores de la irrigación actual
    this.isModalOpen = true; // Abre el modal
  }

  closeModal() {
    this.isModalOpen = false;
  }

}

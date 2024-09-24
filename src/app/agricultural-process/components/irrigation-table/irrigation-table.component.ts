import {Component, inject, Input, OnInit} from '@angular/core';
import {RouterLink} from "@angular/router";
import {Irrigation} from "../../models/irrigation.entity";
import {NgForOf} from "@angular/common";
import {
  WorkersTablePopUpComponent
} from "../../../fields/components/workers-table-pop-up/workers-table-pop-up.component";

@Component({
  selector: 'app-irrigation-table',
  standalone: true,
  imports: [
    RouterLink,
    NgForOf,
    WorkersTablePopUpComponent
  ],
  templateUrl: './irrigation-table.component.html',
  styleUrl: './irrigation-table.component.css'
})

export class IrrigationTableComponent {

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

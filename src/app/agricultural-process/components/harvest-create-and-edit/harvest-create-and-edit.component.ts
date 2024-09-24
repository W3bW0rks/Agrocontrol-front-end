import {Component, EventEmitter, inject, Input, Output, ViewChild} from '@angular/core';
import {NgForOf, NgIf} from "@angular/common";
import {MatFormField, MatLabel} from "@angular/material/form-field";
import {MatInput} from "@angular/material/input";
import {MatOption} from "@angular/material/core";
import {MatSelect} from "@angular/material/select";
import {FormsModule, NgForm, ReactiveFormsModule} from "@angular/forms";
import {Harvest} from "../../models/harvest.entity";
import {WorkerService} from "../../../fields/services/worker.service";
import {MatButton} from "@angular/material/button";

@Component({
  selector: 'app-harvest-create-and-edit',
  standalone: true,
  imports: [
    NgIf,
    MatFormField,
    MatInput,
    MatLabel,
    MatOption,
    MatSelect,
    NgForOf,
    ReactiveFormsModule,
    FormsModule,
    MatButton
  ],
  templateUrl: './harvest-create-and-edit.component.html',
  styleUrl: './harvest-create-and-edit.component.css'
})
export class HarvestCreateAndEditComponent {
  //#region Attributes
  success = false;
  showWarning = false;
  @Input() harvest!: Harvest;
  @Input() editMode: boolean = false;
  @Output() protected harvestAddRequested = new EventEmitter<Harvest>();
  @Output() protected harvestUpdateRequested = new EventEmitter<Harvest>();
  @Output() protected cancelRequested = new EventEmitter<void>();
  @ViewChild('harvestForm', { static: false}) protected harvestForm!: NgForm;
  fieldWorkers: any = [];
  workers: { workerId: number; cost: number }[] = [
    { workerId: 0, cost: 0 }
  ];
  workerService: WorkerService = inject(WorkerService);

  //#endregion Attributes

  //#region Methods

  constructor() {
    this.harvest = new Harvest({});
    this.getWorkers();
  }

  private resetEditState() {
    this.harvest = new Harvest({});
    this.editMode = false;
    this.harvestForm.resetForm();
  }

  private isValid = () => this.harvestForm.valid;

  protected isEditMode = (): boolean => this.editMode;

  protected onSubmit() {
    if (this.isValid() && this.isWorkersValid()) {
      if (this.isEditMode()) {
        this.harvestUpdateRequested.emit(this.harvest);
      } else {
        this.harvest.workers = this.workers;
        this.calculateTotalCost();
        this.harvestAddRequested.emit(this.harvest);
      }
      this.resetEditState();
    } else {
      console.error('Invalid form data');
    }
  }

  protected onCancel() {
    this.cancelRequested.emit();
    this.resetEditState();
  }

  getWorkers() {
    this.workerService.getAll().subscribe((response: any) => {
      this.fieldWorkers = response;
    });
  }

  isWorkersValid() {
    return this.workers.every(worker => worker.workerId && worker.cost > 0);
  }

  addWorker() {
    this.workers.push({ workerId: 0, cost: 0 }); // Add a new worker object
  }

  removeWorker(index: number) {
    if (this.workers.length > 1) {
      this.workers.splice(index, 1); // Remove the worker at the specified index
    }
  }

  calculateTotalCost() {
    this.harvest.totalWorkersCost = this.workers.reduce((acc, worker) => acc + (worker.cost || 0), 0);
    console.log('Total Workers Cost:', this.harvest.totalWorkersCost);
  }

  //#endregion Methods
}

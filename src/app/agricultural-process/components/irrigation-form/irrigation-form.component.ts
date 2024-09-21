import {Component, inject, Input, ViewChild} from '@angular/core';
import {Irrigation} from "../../models/irrigation.entity";
import {FormsModule, NgForm} from "@angular/forms";
import {IrrigationService} from "../../services/irrigation.service";
import {MatFormField, MatLabel} from "@angular/material/form-field";
import {MatInput} from "@angular/material/input";
import {WorkerService} from "../../../fields/services/worker.service";
import {MatOption, MatSelect} from "@angular/material/select";
import {MatButton} from "@angular/material/button";
import {NgForOf} from "@angular/common";

@Component({
  selector: 'app-irrigation-form',
  standalone: true,
  imports: [
    FormsModule,
    MatFormField,
    MatInput,
    MatLabel,
    MatSelect,
    MatOption,
    MatButton,
    NgForOf
  ],
  templateUrl: './irrigation-form.component.html',
  styleUrl: './irrigation-form.component.css'
})
export class IrrigationFormComponent {
  @Input() agriculturalProcessId!: number;
  @Input() date!: string;
  success = false;
  irrigation!: Irrigation;
  @ViewChild('irrigationForm', { static: false }) irrigationForm!: NgForm;
  fieldWorkers: any = [];
  workers: { workerId: number; cost: number }[] = [
    { workerId: 0, cost: 0 }
  ];
  irrigationService: IrrigationService = inject(IrrigationService);
  workerService: WorkerService = inject(WorkerService);

  constructor() {
    this.irrigation = new Irrigation({});
    this.getWorkers();
  }

  private resetForm() {
    this.irrigationForm.resetForm();
    this.irrigation = new Irrigation({});
    this.workers = [
      { workerId: 0, cost: 0 }
    ]; // Reset workers array
  }

  onSubmit() {
    if (this.irrigationForm.form.valid) {
      this.irrigation.agriculturalProcessId = this.agriculturalProcessId;
      this.irrigation.date = this.date;
      this.irrigation.workers = this.workers.filter(worker => worker.workerId && worker.cost > 0); // Solo envía trabajadores válidos
      console.log('Irrigation', this.irrigation);
      this.irrigationService.create(this.irrigation).subscribe((response: any) => {
        console.log('Irrigation created', response);
      });
      this.success = true;
      this.resetForm();
    } else {
      console.log('Form is invalid');
    }
  }

  addWorker() {
    this.workers.push({ workerId: 0, cost: 0 }); // Add a new worker object
  }

  removeWorker(index: number) {
    if (this.workers.length > 1) {
      this.workers.splice(index, 1); // Remove the worker at the specified index
    }
  }

  onCancel() {
    this.resetForm();
    this.success = false;
  }

  getWorkers() {
    this.workerService.getAll().subscribe((response: any) => {
      this.fieldWorkers = response;
    });
  }
}


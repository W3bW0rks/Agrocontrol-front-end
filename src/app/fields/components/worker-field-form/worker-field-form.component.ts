import {Component, inject, Input, ViewChild} from '@angular/core';
import {FormBuilder, FormGroup, FormsModule, NgForm, Validators} from '@angular/forms';
import { MatFormField } from '@angular/material/form-field';
import { MatInput } from '@angular/material/input';
import { MatButton } from '@angular/material/button';
import { NgIf } from '@angular/common';
import {Worker} from "../../models/worker.entity";
import {WorkerService} from "../../services/worker.service";

@Component({
  selector: 'app-worker-field-form',
  standalone: true,
  imports: [ FormsModule,
    MatFormField,
    MatInput,
    MatButton,
    NgIf],
  templateUrl: './worker-field-form.component.html',
  styleUrl: './worker-field-form.component.css'
})
export class WorkerFieldFormComponent {
  @Input() fieldId!: number; // Recibe el fieldId como input
  worker!: Worker;
  @ViewChild('workerForm', { static: false}) workerForm!: NgForm;
  workerService: WorkerService = inject(WorkerService);

  constructor() {
    this.worker = new Worker({});
  }

  private resetForm() {
    this.workerForm.resetForm();
    this.worker = new Worker({});
  }

  onSubmit() {
    if (this.workerForm.form.valid) {
      this.worker.fieldId = this.fieldId;
      this.workerService.create(this.worker).subscribe((response: any) => {
        console.log('Worker created', response);
      })
      this.resetForm();
    } else {
      console.log('Form is invalid');
    }
  }

  onCancel() {
    this.resetForm();
  }

}

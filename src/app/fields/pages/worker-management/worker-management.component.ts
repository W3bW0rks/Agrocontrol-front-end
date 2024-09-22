import {Component, inject, OnInit} from '@angular/core';
import {MatButton} from "@angular/material/button";
import {WorkerFieldFormComponent} from "../../components/worker-field-form/worker-field-form.component";
import {WorkersFieldTableComponent} from "../../components/workers-field-table/workers-field-table.component";
import {Worker} from "../../models/worker.entity";
import {WorkerService} from "../../services/worker.service";
import {MatTableDataSource} from "@angular/material/table";
import {WorkersTablePopUpComponent} from "../../components/workers-table-pop-up/workers-table-pop-up.component";

@Component({
  selector: 'app-worker-management',
  standalone: true,
  imports: [
    MatButton,
    WorkerFieldFormComponent,
    WorkersFieldTableComponent,
    WorkersTablePopUpComponent
  ],
  templateUrl: './worker-management.component.html',
  styleUrl: './worker-management.component.css'
})
export class WorkerManagementComponent implements OnInit{
  modalOpen: boolean = false;
  protected dataSource!: Array<Worker>;
  private workerService: WorkerService = inject(WorkerService);

  ngOnInit() {
    this.getWorkers();
  }

  getWorkers() {
    this.workerService.getAll().subscribe((response: Array<Worker>) => this.dataSource = response);
  }

  handleSuccess() {
    this.getWorkers();
    this.closeModal();
  }

  openModal() {
    this.modalOpen = true;
  }

  closeModal() {
    this.modalOpen = false;
  }
}

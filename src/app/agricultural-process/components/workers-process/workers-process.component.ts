import {Component, inject, Input} from '@angular/core';
import {WorkerService} from '../../../fields/services/worker.service'
import {Observable, Subscription} from "rxjs";
import {NgForOf} from "@angular/common";

@Component({
  selector: 'app-workers-process',
  standalone: true,
  imports: [
    NgForOf
  ],
  templateUrl: './workers-process.component.html',
  styleUrl: './workers-process.component.css'
})

export class WorkersProcessComponent {

  private _workerService: WorkerService = inject(WorkerService);

  @Input()
  workersProcess: any;

  workerNames: string[] = [];

  async ngOnInit() {
    await this.loadWorkerNames();
  }

  async loadWorkerNames() {
    const promises = this.workersProcess.map((worker: any)=> this._workerService.getById(worker.workerId).toPromise());
    const results = await Promise.all(promises);
    this.workerNames = results.map(response => response!.fullName);
  }
}

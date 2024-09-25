import { Injectable } from '@angular/core';
import {BaseService} from "../../shared/services/base.service";
import {Worker} from "../models/worker.entity";

@Injectable({providedIn: 'root'})
export class WorkerService extends BaseService<Worker>{

  constructor() {
    super();
    this.resourceEndpoint = '/fieldWorkers';
  }
}

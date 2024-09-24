import { Injectable } from '@angular/core';
import {BaseService} from "../../shared/services/base.service";
import {Treatment} from "../models/treatment.entity";

@Injectable({
  providedIn: 'root'
})
export class TreatmentService extends BaseService<Treatment>{
  constructor() {
    super()
    this.resourceEndpoint = '/cropTreatments';
  }
}

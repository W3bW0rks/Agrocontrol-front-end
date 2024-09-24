import { Injectable } from '@angular/core';
import {BaseService} from "../../shared/services/base.service";
import {CropTreatment} from "../models/crop-treatment.entity";

@Injectable({
  providedIn: 'root'
})
export class CropTreatmentService extends BaseService<CropTreatment>{

  constructor() {
    super();
    this.resourceEndpoint = '/cropTreatments';
  }
}
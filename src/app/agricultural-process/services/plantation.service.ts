import { Injectable } from '@angular/core';
import {BaseService} from "../../shared/services/base.service";
import {AgriculturalProcedure} from "../models/agricultural-procedure.entity";

@Injectable({
  providedIn: 'root'
})
export class PlantationService extends BaseService<AgriculturalProcedure> {

  constructor() {
    super()
    this.resourceEndpoint = '/agriculturalProcess';
  }
}

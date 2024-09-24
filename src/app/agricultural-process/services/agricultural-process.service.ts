import { Injectable } from '@angular/core';
import {BaseService} from "../../shared/services/base.service";
import {AgriculturalProcess} from "../models/agricultural-process.entity";

@Injectable({
  providedIn: 'root'
})

export class AgriculturalProcessService extends BaseService<AgriculturalProcess>{

  constructor() {
    super();
    this.resourceEndpoint = '/agriculturalProcess';
  }
}

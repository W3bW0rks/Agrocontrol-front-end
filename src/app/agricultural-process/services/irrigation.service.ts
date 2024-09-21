import { Injectable } from '@angular/core';
import {BaseService} from "../../shared/services/base.service";
import {Irrigation} from "../models/irrigation.entity";

@Injectable({
  providedIn: 'root'
})
export class IrrigationService extends BaseService<Irrigation>{

  constructor() {
    super();
    this.resourceEndpoint = '/irrigationsDetails';
  }
}

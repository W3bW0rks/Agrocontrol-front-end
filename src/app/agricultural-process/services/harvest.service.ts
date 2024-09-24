import { Injectable } from '@angular/core';
import {BaseService} from "../../shared/services/base.service";
import {Harvest} from "../models/harvest.entity";

@Injectable({
  providedIn: 'root'
})
export class HarvestService extends BaseService<Harvest>{

  constructor() {
    super();
    this.resourceEndpoint = '/harvestDetails';
  }
}

import { Injectable } from '@angular/core';
import {BaseService} from "../../shared/services/base.service";
import {Seeding} from "../models/seeding.entity";

@Injectable({
  providedIn: 'root'
})
export class SeedingService extends BaseService<Seeding>{

  constructor() {
    super();
    this.resourceEndpoint = '/seedingDetails'
  }
}

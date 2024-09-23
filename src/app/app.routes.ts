import { Routes } from '@angular/router';

import {
  IrrigationSchedulerComponent
} from "./agricultural-process/pages/irrigation-scheduler/irrigation-scheduler.component";

import {
  IrrigationTableComponent
} from "./agricultural-process/components/irrigation-table/irrigation-table.component";

export const routes: Routes = [
  { path: 'irrigation-scheduler', component: IrrigationSchedulerComponent },
  { path: 'irrigation-table',  component: IrrigationTableComponent }
];

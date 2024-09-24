import { Routes } from '@angular/router';

import {
  IrrigationSchedulerComponent
} from "./agricultural-process/pages/irrigation-scheduler/irrigation-scheduler.component";

import {
  IrrigationTableComponent
} from "./agricultural-process/components/irrigation-table/irrigation-table.component";
import {IrrigationViewComponent} from "./agricultural-process/pages/irrigation-view/irrigation-view.component";

export const routes: Routes = [
  { path: 'irrigation-scheduler', component: IrrigationSchedulerComponent },
  { path: 'irrigation-table',  component: IrrigationViewComponent }
];

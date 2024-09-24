import { Routes } from '@angular/router';

import {
  IrrigationSchedulerComponent
} from "./agricultural-process/pages/irrigation-scheduler/irrigation-scheduler.component";
import {CardFieldListComponent} from "./fields/components/card-field-list/card-field-list.component";


export const routes: Routes = [
  { path: 'irrigation-scheduler', component: IrrigationSchedulerComponent },
  { path: 'card', component: CardFieldListComponent },
];

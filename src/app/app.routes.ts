import { Routes } from '@angular/router';

import {
  IrrigationSchedulerComponent
} from "./agricultural-process/pages/irrigation-scheduler/irrigation-scheduler.component";
import {WorkerManagementComponent} from "./fields/pages/worker-management/worker-management.component";
import {HomeComponent} from "./public/components/home/home.component";


export const routes: Routes = [
  { path: 'irrigation-scheduler', component: IrrigationSchedulerComponent },
  { path: 'worker-management', component: WorkerManagementComponent },
  { path: 'home', component: HomeComponent },
];

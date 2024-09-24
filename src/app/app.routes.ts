import { Routes } from '@angular/router';

import {
  IrrigationSchedulerComponent
} from "./agricultural-process/pages/irrigation-scheduler/irrigation-scheduler.component";

import {
  CropTreatmentSchedulerComponent
} from "./agricultural-process/pages/crop-treatment-scheduler/crop-treatment-scheduler.component";

import {
  LoginFormComponent
} from "./profile-management/components/login-form/login-form.component";

import {
  CropTreatmentViewComponent
} from "./agricultural-process/pages/crop-treatment-view/crop-treatment-view.component";

export const routes: Routes = [
  { path: 'irrigation-scheduler', component: IrrigationSchedulerComponent },
  { path: 'crop-treatment-scheduler', component: CropTreatmentSchedulerComponent },
  { path: 'crop-treatment-table', component: CropTreatmentViewComponent },
  { path: 'login', component: LoginFormComponent }
];

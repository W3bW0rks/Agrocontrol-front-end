import {Routes} from '@angular/router';

import {
  IrrigationSchedulerComponent
} from './agricultural-process/pages/irrigation-scheduler/irrigation-scheduler.component';
import {
  CropTreatmentSchedulerComponent
} from './agricultural-process/pages/crop-treatment-scheduler/crop-treatment-scheduler.component';
import {
  SeedingRegistrationComponent
} from './agricultural-process/pages/seeding-registration/seeding-registration.component';
import {LoginFormComponent} from './profile-management/components/login-form/login-form.component';
import {CardFieldListComponent} from './fields/components/card-field-list/card-field-list.component';

export const routes: Routes = [
  { path: 'irrigation-scheduler', component: IrrigationSchedulerComponent },
  { path: 'crop-treatment-scheduler', component: CropTreatmentSchedulerComponent },
  { path: 'seeding-registration', component: SeedingRegistrationComponent },
  { path: 'login', component: LoginFormComponent },
  { path: 'card', component: CardFieldListComponent },
  { path: '', redirectTo: '/login', pathMatch: 'full' },
];

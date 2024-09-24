import { Routes } from '@angular/router';

import {
  IrrigationSchedulerComponent
} from './agricultural-process/pages/irrigation-scheduler/irrigation-scheduler.component';
import {
  CropTreatmentSchedulerComponent
} from './agricultural-process/pages/crop-treatment-scheduler/crop-treatment-scheduler.component';
import {
  SeedingRegistrationComponent
} from './agricultural-process/pages/seeding-registration/seeding-registration.component';
import { LoginFormComponent } from './profile-management/components/login-form/login-form.component';
import { CardFieldListComponent } from './fields/components/card-field-list/card-field-list.component';
import {
  HomeAgriculturalProcessComponent
} from "./agricultural-process/pages/home-agricultural-process/home-agricultural-process.component";

export const routes: Routes = [
  {
    path: '',
    redirectTo: '/login',
    pathMatch: 'full'
  },
  {
    path: 'login',
    component: LoginFormComponent,
    data: { name: 'login' }
  },
  // Ruta con parámetros dinámicos para el role y el id
  {
    path: 'field/:role/:id',
    component: CardFieldListComponent,
    data: { name: 'field' }
  },
  {
    path: 'irrigation-scheduler/:id',
    component: IrrigationSchedulerComponent,
    data: { name: 'irrigation-scheduler' }
  },
  {
    path: 'home-agricultural-process/:id',
    component: HomeAgriculturalProcessComponent,
    data: { name: 'home-agricultural-process' }
  },
  {
    path: 'seeding-registration/:id',
    component: SeedingRegistrationComponent,
    data: { name: 'seeding-registration' }
  },
  {
    path: 'crop-treatment-scheduler/:id',
    component: CropTreatmentSchedulerComponent,
    data: { name: 'crop-treatment-scheduler' }
  }
];

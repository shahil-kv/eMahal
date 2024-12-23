import { Routes } from '@angular/router';
import { DashboardFamilyComponent } from './web-app/dashboard-family/dashboard-family.component';
import { HomeComponent } from './shared/home/home.component';
import { DashboardCommiteComponent } from './web-app/dashboard-commite/dashboard-commite.component';

export const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: DashboardFamilyComponent,
  },
  {
    path: 'home',
    component: HomeComponent,
  },
  {
    path: 'dashboard-family',
    component: DashboardFamilyComponent,
  },
  {
    path: 'dashboard-commite',
    component: DashboardCommiteComponent,
  },
];

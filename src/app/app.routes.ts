import { Routes } from '@angular/router';
import { DashboardComponent } from './web-app/dashboard/dashboard.component';

export const routes: Routes = [
  {
    path: '',
    component: DashboardComponent,
    children: [
      // {
      //   path: '',
      //   component: HomeComponent,
      //   pathMatch: 'full',
      // },
      // {
      //   path: 'dashboard',
      //   component: DashboardComponent,
      // },
      //   {
      //     path:'**',
      //     pathMatch:'full',
      //     component:PageNotFoundComponent
      //   }
    ],
  },
];

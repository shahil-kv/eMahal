import { Routes } from '@angular/router';
import { HomeComponent } from './shared/home/home.component';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    children: [
      {
        path: '',
        component: HomeComponent,
        pathMatch: 'full',
      },
      {
        path: 'home',
        component: HomeComponent,
      },
      {
        path: 'dashboard',
        component: HomeComponent,
      },
      //   {
      //     path:'**',
      //     pathMatch:'full',
      //     component:PageNotFoundComponent
      //   }
    ],
  },
];

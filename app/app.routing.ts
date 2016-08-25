import { Routes, RouterModule } from '@angular/router';

import { DashboardComponent }      from './dashboard.component';
import { HeroesComponent }      from './heroes.component';

import { HeroDetailComponent }  from './hero-detail.component';

const appRoutes: Routes = [
{
  path: '',
  redirectTo: '/dashboard',
  pathMatch: 'full'
},
{
  path: 'detail/:id',
  component: HeroDetailComponent
},
  {
    path: 'heroes',
    component: HeroesComponent
  },
    {
      path: 'dashboard',
      component: DashboardComponent
    },
];

export const routing = RouterModule.forRoot(appRoutes);

import { Routes, RouterModule } from '@angular/router';

import { DashboardComponent }      from './dashboard/dashboard.component';
import { ProjectListComponent }      from './project-list/project-list.component';
import { NewProjectComponent }      from './new-project/new-project.component';

const appRoutes: Routes = [
    {
      path: '',
      redirectTo: '/dashboard',
      pathMatch: 'full'
    },
    {
      path: 'dashboard',
      component: DashboardComponent
    },
    {
      path: 'project-list',
      component: ProjectListComponent
    },
    {
      path: 'new-project',
      component: NewProjectComponent
    }

];

export const routing = RouterModule.forRoot(appRoutes);

"use strict";
var router_1 = require('@angular/router');
var dashboard_component_1 = require('./dashboard/dashboard.component');
var project_list_component_1 = require('./project-list/project-list.component');
var new_project_component_1 = require('./new-project/new-project.component');
var appRoutes = [
    {
        path: '',
        redirectTo: '/dashboard',
        pathMatch: 'full'
    },
    {
        path: 'dashboard',
        component: dashboard_component_1.DashboardComponent
    },
    {
        path: 'project-list',
        component: project_list_component_1.ProjectListComponent
    },
    {
        path: 'new-project',
        component: new_project_component_1.NewProjectComponent
    }
];
exports.routing = router_1.RouterModule.forRoot(appRoutes);
//# sourceMappingURL=app.routing.js.map
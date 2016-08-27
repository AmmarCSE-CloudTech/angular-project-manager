"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
/// <reference path="../typings/index.d.ts" />
var core_1 = require('@angular/core');
var platform_browser_1 = require('@angular/platform-browser');
var forms_1 = require('@angular/forms');
var http_1 = require('@angular/http');
// Imports for loading & configuring the in-memory web api
var http_2 = require('@angular/http');
var angular2_in_memory_web_api_1 = require('angular2-in-memory-web-api');
var in_memory_data_service_1 = require('./shared/in-memory-data.service');
var app_component_1 = require('./app.component');
var app_routing_1 = require('./app.routing');
require('./shared/rxjs-extensions');
var menu_bar_component_1 = require('./menu-bar/menu-bar.component');
var menu_widgets_component_1 = require('./menu-bar/menu-widgets/menu-widgets.component');
var menu_nav_component_1 = require('./menu-bar/menu-nav/menu-nav.component');
var dashboard_component_1 = require('./dashboard/dashboard.component');
var summary_component_1 = require('./dashboard/summary/summary.component');
var break_down_component_1 = require('./dashboard/charts/break-down.component');
var break_down_2_component_1 = require('./dashboard/charts/break-down-2.component');
var area_component_1 = require('./dashboard/charts/area.component');
var line_component_1 = require('./dashboard/charts/line.component');
var bar_component_1 = require('./dashboard/charts/bar.component');
var statistics_component_1 = require('./dashboard/charts/statistics-chart/statistics.component');
var chart_component_1 = require('./dashboard/charts/statistics-chart/chart.component');
var chart_2_component_1 = require('./dashboard/charts/statistics-chart/chart-2.component');
var chart_3_component_1 = require('./dashboard/charts/statistics-chart/chart-3.component');
var approve_reject_component_1 = require('./dashboard/modals/approve-reject.component');
var activity_log_component_1 = require('./dashboard/modals/activity-log.component');
var subphase_details_component_1 = require('./dashboard/modals/subphase-details.component');
var project_list_component_1 = require('./project-list/project-list.component');
var new_project_component_1 = require('./new-project/new-project.component');
var map_widget_component_1 = require('./new-project/map-widget/map-widget.component');
var project_service_1 = require('./shared/project.service');
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            imports: [
                platform_browser_1.BrowserModule,
                forms_1.FormsModule,
                app_routing_1.routing,
                http_1.HttpModule
            ],
            declarations: [
                app_component_1.AppComponent,
                menu_bar_component_1.MenuBarComponent,
                menu_widgets_component_1.MenuWidgetsComponent,
                menu_nav_component_1.MenuNavComponent,
                dashboard_component_1.DashboardComponent,
                summary_component_1.SummaryComponent,
                break_down_component_1.BreakDownChartComponent,
                break_down_2_component_1.BreakDown2ChartComponent,
                area_component_1.AreaChartComponent,
                line_component_1.LineChartComponent,
                bar_component_1.BarChartComponent,
                statistics_component_1.StatisticsChartComponent,
                chart_component_1.ChartChartComponent,
                chart_2_component_1.Chart2ChartComponent,
                chart_3_component_1.Chart3ChartComponent,
                approve_reject_component_1.ApproveRejectModalComponent,
                activity_log_component_1.ActivityLogModalComponent,
                subphase_details_component_1.SubphaseDetailModalComponent,
                project_list_component_1.ProjectListComponent,
                new_project_component_1.NewProjectComponent,
                map_widget_component_1.MapWidgetComponent
            ],
            providers: [
                project_service_1.ProjectService,
                { provide: http_2.XHRBackend, useClass: angular2_in_memory_web_api_1.InMemoryBackendService },
                { provide: angular2_in_memory_web_api_1.SEED_DATA, useClass: in_memory_data_service_1.InMemoryDataService } // in-mem server data
            ],
            bootstrap: [app_component_1.AppComponent]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map
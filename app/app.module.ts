import { NgModule }       from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { FormsModule }    from '@angular/forms';
import { HttpModule }     from '@angular/http';

// Imports for loading & configuring the in-memory web api
import { XHRBackend } from '@angular/http';

import { InMemoryBackendService, SEED_DATA } from 'angular2-in-memory-web-api';
import { InMemoryDataService }               from './shared/in-memory-data.service';

import { AppComponent }   from './app.component';
import { routing }        from './app.routing';

import './shared/rxjs-extensions';

import { MenuBarComponent }      from './menu-bar/menu-bar.component';
import { MenuWidgetsComponent }      from './menu-bar/menu-widgets/menu-widgets.component';
import { MenuNavComponent }      from './menu-bar/menu-nav/menu-nav.component';
import { DashboardComponent }      from './dashboard/dashboard.component';
import { SummaryComponent }      from './dashboard/summary/summary.component';
import { BreakDownChartComponent }      from './dashboard/charts/break-down.component';
import { BreakDown2ChartComponent }      from './dashboard/charts/break-down-2.component';
import { AreaChartComponent }      from './dashboard/charts/area.component';
import { LineChartComponent }      from './dashboard/charts/line.component';
import { BarChartComponent }      from './dashboard/charts/bar.component';
import { StatisticsChartComponent }      from './dashboard/charts/statistics-chart/statistics.component';
import { ChartChartComponent }      from './dashboard/charts/statistics-chart/chart.component';
import { Chart2ChartComponent }      from './dashboard/charts/statistics-chart/chart-2.component';
import { Chart3ChartComponent }      from './dashboard/charts/statistics-chart/chart-3.component';
import { ApproveRejectModalComponent }      from './dashboard/modals/approve-reject.component';
import { ActivityLogModalComponent }      from './dashboard/modals/activity-log.component';
import { SubphaseDetailModalComponent }      from './dashboard/modals/subphase-details.component';
import { ProjectListComponent }      from './project-list/project-list.component';
import { NewProjectComponent }      from './new-project/new-project.component';
import { MapWidgetComponent }      from './new-project/map-widget/map-widget.component';
import { ProjectService }      from './shared/project.service';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    routing,
    HttpModule
  ],
  declarations: [
    AppComponent,
    MenuBarComponent,
    MenuWidgetsComponent,
    MenuNavComponent,
    DashboardComponent,
    SummaryComponent,
    BreakDownChartComponent,
    BreakDown2ChartComponent,
    AreaChartComponent,
    LineChartComponent,
    BarChartComponent,
    StatisticsChartComponent,
    ChartChartComponent,
    Chart2ChartComponent,
    Chart3ChartComponent,
    ApproveRejectModalComponent,
    ActivityLogModalComponent,
    SubphaseDetailModalComponent,
    ProjectListComponent,
    NewProjectComponent,
    MapWidgetComponent
  ],
  providers: [
    ProjectService,
    { provide: XHRBackend, useClass: InMemoryBackendService }, // in-mem server
    { provide: SEED_DATA,  useClass: InMemoryDataService }     // in-mem server data
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule {
}

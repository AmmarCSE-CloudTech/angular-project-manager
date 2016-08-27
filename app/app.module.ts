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

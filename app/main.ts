import 'jquery';
import 'bootstrap';
import 'toastr';
import 'jquery.ui';
import 'jquery.appear';
import 'jquery.sticky';
import 'jquery.nav';
import 'jquery.matchHeight';
import 'highcharts';
import 'icheck';
import 'moment';
import 'fullcalendar';
import 'google-maps';

import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from './app.module';
platformBrowserDynamic().bootstrapModule(AppModule);

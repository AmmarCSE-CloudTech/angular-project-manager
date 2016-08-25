import { Component } from '@angular/core';
import { BreakDownChart, BreakDown2Chart, AreaChart, LineChart, ChartChart, Chart2Chart, Chart3Chart, BarChart } from './plugin-directives/highcharts.directive'

@Component({
    selector: 'dashboard',
    directives: [BreakDownChart, BreakDown2Chart, AreaChart, LineChart, ChartChart, Chart2Chart, Chart3Chart, BarChart],
    styleUrls: ['app/dashboard/dashboard.component.css'],
    templateUrl: 'app/dashboard/dashboard.component.html'
})

export class DashboardComponent {
}

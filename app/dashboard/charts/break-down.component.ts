import { Component } from '@angular/core';
import { BreakDownChart } from '../plugin-directives/highcharts.directive'

@Component({
    selector: 'break-down-chart',
    directives: [BreakDownChart],
    styleUrls: ['app/dashboard/charts/break-down.component.css'],
    templateUrl: 'app/dashboard/charts/break-down.component.html'
})

export class BreakDownChartComponent {
}

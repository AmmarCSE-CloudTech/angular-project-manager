import { Component } from '@angular/core';
import { BarChart } from '../plugin-directives/highcharts.directive'

@Component({
    selector: 'bar-chart',
    directives: [BarChart],
    styleUrls: ['app/dashboard/charts/bar.component.css'],
    templateUrl: 'app/dashboard/charts/bar.component.html'
})

export class BarChartComponent {
}

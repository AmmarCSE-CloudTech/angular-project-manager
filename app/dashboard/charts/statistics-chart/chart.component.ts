import { Component } from '@angular/core';
import { ChartChart } from '../../plugin-directives/highcharts.directive'

@Component({
    selector: 'chart-chart',
    directives: [ChartChart],
    styleUrls: ['app/dashboard/charts/statistics-chart/chart.component.css'],
    templateUrl: 'app/dashboard/charts/statistics-chart/chart.component.html'
})

export class ChartChartComponent {
}

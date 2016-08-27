import { Component } from '@angular/core';
import { ChartChart } from '../../plugin-directives/highcharts.directive'

@Component({
    selector: 'chart-chart',
    directives: [ChartChart],
    templateUrl: 'app/dashboard/charts/statistics-chart/chart.component.html'
})

export class ChartChartComponent {
}

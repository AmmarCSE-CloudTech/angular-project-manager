import { Component } from '@angular/core';
import { Chart3Chart } from '../../plugin-directives/highcharts.directive'

@Component({
    selector: 'chart-3-chart',
    directives: [Chart3Chart],
    styleUrls: ['app/dashboard/charts/statistics-chart/chart-3.component.css'],
    templateUrl: 'app/dashboard/charts/statistics-chart/chart-3.component.html'
})

export class Chart3ChartComponent {
}

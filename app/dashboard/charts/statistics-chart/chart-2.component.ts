import { Component } from '@angular/core';
import { Chart2Chart } from '../../plugin-directives/highcharts.directive'

@Component({
    selector: 'chart-2-chart',
    directives: [Chart2Chart],
    templateUrl: 'app/dashboard/charts/statistics-chart/chart-2.component.html'
})

export class Chart2ChartComponent {
}

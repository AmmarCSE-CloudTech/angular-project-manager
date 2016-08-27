import { Component } from '@angular/core';
import { LineChart } from '../plugin-directives/highcharts.directive'

@Component({
    selector: 'line-chart',
    directives: [LineChart],
    templateUrl: 'app/dashboard/charts/line.component.html'
})

export class LineChartComponent {
}

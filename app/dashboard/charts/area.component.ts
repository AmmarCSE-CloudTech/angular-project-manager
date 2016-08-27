import { Component } from '@angular/core';
import { AreaChart } from '../plugin-directives/highcharts.directive'

@Component({
    selector: 'area-chart',
    directives: [AreaChart],
    templateUrl: 'app/dashboard/charts/area.component.html'
})

export class AreaChartComponent {
}

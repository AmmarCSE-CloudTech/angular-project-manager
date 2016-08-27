import { Component } from '@angular/core';
import { BreakDown2Chart } from '../plugin-directives/highcharts.directive'

@Component({
    selector: 'break-down-2-chart',
    directives: [BreakDown2Chart],
    templateUrl: 'app/dashboard/charts/break-down-2.component.html'
})

export class BreakDown2ChartComponent {
}

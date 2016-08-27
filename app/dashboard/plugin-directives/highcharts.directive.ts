import {
    Component,
    Directive,
    ElementRef
} from '@angular/core'

@Directive({
    selector: "[break-down-chart]"
})
export class BreakDownChart {
    constructor(el: ElementRef) {
        //timeout of '0' needed to allow containers to load
        setTimeout(function(){
            $(el.nativeElement).highcharts({
                    chart: {
                        renderTo: 'container',
                        type: 'pie',
                        margin: [15, 0, 0, 10],
                        height: 320
                    },
                    title: {
                        useHTML: true,
                        verticalAlign: 'middle',
                        floating: false,
                        text: "<div style='position: relative; top: 0; display: inline-block; line-height: 1; color: #667585; text-align: center'><span style='font-size: 25px; font-weight: 500'>34.5%</span></div>",
                    },
                    tooltip: {
                        useHTML: true,
                        borderRadius: 6,
                        shadow: false,
                        backgroundColor: 'transparent',
                        borderColor: 'transparent',
                        formatter: function() {
                            return "<span class='ttip'>" + this.point.percentage + "%</span>";
                        },
                        style: {
                            color: '#fff',
                            fontSize: '14px'
                        }
                    },
                    credits: {
                        enabled: false
                    },
                    colors: [
                        '#FF9188', '#AFE5DA', '#C5B2E9', '#97C1DA', '#FCB319', '#86A033', '#614931', '#00526F', '#594266', '#cb6828', '#aaaaab', '#a89375'
                    ],
                    plotOptions: {
                        pie: {
                            allowPointSelect: true,
                            cursor: 'pointer',
                            showInLegend: true,
                            dataLabels: {
                                enabled: false,
                                formatter: function() {
                                    return this.percentage.toFixed(2) + '%';
                                }
                            }
                        }
                    },
                    legend: {
                        enabled: false,
                    },
                    series: [{
                        type: 'pie',
                        size: '100%',
                        innerSize: '60%',
                        states: {
                            hover: {
                                enabled: false
                            }
                        },
                        dataLabels: {

                        },
                        data: [
                            ['Item', 16],
                            ['Item', 44],
                            ['Item', 22],
                            ['Item', 18]
                        ]
                    }]
                },
                function(chart) {

                }
            );
        }, 0);
    }
}


@Directive({
    selector: "[break-down-2-chart]"
})
export class BreakDown2Chart {
    constructor(el: ElementRef) {
        //timeout of '0' needed to allow containers to load
        setTimeout(function(){
            $(el.nativeElement).highcharts({
                    chart: {
                        renderTo: 'container',
                        type: 'pie',
                        margin: [15, 0, 0, 10],
                        height: 320
                    },
                    tooltip: {
                        useHTML: true,
                        borderRadius: 6,
                        shadow: false,
                        backgroundColor: 'transparent',
                        borderColor: 'transparent',
                        formatter: function() {
                            return "<span class='ttip'>" + this.point.percentage + "%</span>";
                        },
                        style: {
                            color: '#fff',
                            fontSize: '14px'
                        }
                    },
                    credits: {
                        enabled: false
                    },
                    colors: [
                        '#FF9188', '#AFE5DA', '#C5B2E9', '#97C1DA', '#FCB319', '#86A033', '#614931', '#00526F', '#594266', '#cb6828', '#aaaaab', '#a89375'
                    ],
                    title: {
                        useHTML: true,
                        verticalAlign: 'middle',
                        floating: false,
                        text: "<div style='position: relative; top: 0; display: inline-block; line-height: 1; color: #667585; text-align: center'><span style='font-size: 25px; font-weight: 500'>34.5%</span></div>",
                    },
                    plotOptions: {
                        pie: {
                            allowPointSelect: true,
                            cursor: 'pointer',
                            showInLegend: true,
                            dataLabels: {
                                enabled: false,
                                formatter: function() {
                                    return this.percentage.toFixed(2) + '%';
                                }
                            }
                        }
                    },
                    legend: {
                        enabled: false,
                    },
                    series: [{
                        type: 'pie',
                        size: '100%',
                        innerSize: '60%',
                        states: {
                            hover: {
                                enabled: false
                            }
                        },
                        dataLabels: {

                        },
                        data: [
                            ['Item', 16],
                            ['Item', 44],
                            ['Item', 22],
                            ['Item', 18]
                        ],
                        symbolRadius: 100
                    }]
                },
                function(chart) { // on complete

                }
            );
        }, 0);
    }
}

@Directive({
    selector: "[bar-chart]"
})
export class BarChart {
    constructor(el: ElementRef) {
        //timeout of '0' needed to allow containers to load
        setTimeout(function(){
            $(el.nativeElement).highcharts({
                chart: {
                    renderTo: 'container',
                    type: 'column',
                    margin: [30, 30, 40, 30],
                    height: 250
                },
                plotOptions: {
                    column: {
                        pointPadding: 0,
                        borderWidth: 0,
                        borderRadiusTopLeft: 5,
                        borderRadiusTopRight: 5
                    }
                },
                tooltip: {
                    useHTML: true,
                    borderRadius: 6,
                    shadow: false,
                    backgroundColor: 'transparent',
                    borderColor: 'transparent',
                    formatter: function() {
                        return "<span class='ttip'>" + this.percentage + "%</span>";
                    },
                    style: {
                        color: '#fff',
                        fontSize: '14px'
                    }
                },
                credits: {
                    enabled: false
                },
                colors: [
                    '#97C1DA', '#B0E5DC', '#7E8894', '#FF9089', '#C5B2E7', '#C4E793', '#614931', '#00526F', '#594266', '#cb6828', '#aaaaab', '#a89375'
                ],
                title: {
                    text: null
                },
                xAxis: {
                    type: 'category',
                    tickColor: false,
                },
                yAxis: {
                    title: {
                        text: null
                    },
                    tickInterval: 1,
                    gridLineColor: '#e8e8e8'

                },
                legend: {
                    enabled: false,
                },
                series: [{
                    colorByPoint: true,
                    states: {
                        hover: {
                            enabled: false
                        }
                    },
                    dataLabels: {

                    },
                    data: [{
                        name: 'Item 1',
                        y: 6,
                        percentage: 44,
                    }, {
                        name: 'Item 2',
                        y: 4,
                        percentage: 24
                    }, {
                        name: 'Item 3',
                        y: 2,
                        percentage: 15
                    }, {
                        name: 'Item 4',
                        y: 6,
                        percentage: 54
                    }, {
                        name: 'Item 5',
                        y: 5,
                        percentage: 56
                    }, {
                        name: 'Item 6',
                        y: 4.5,
                        percentage: 64
                    }]
                }]
            });
        }, 0);
    }
}

@Directive({
    selector: "[chart-chart]"
})
export class ChartChart {
    constructor(el: ElementRef) {
        //timeout of '0' needed to allow containers to load
        setTimeout(function(){
            $(el.nativeElement).highcharts({
                    chart: {
                        renderTo: 'container',
                        type: 'pie',
                        margin: 0,
                        height: 190,
                        borderRadius: 0
                    },
                    tooltip: {
                        useHTML: true,
                        borderRadius: 6,
                        shadow: false,
                        backgroundColor: 'transparent',
                        borderColor: 'transparent',
                        formatter: function() {
                            return "<span class='ttip'>" + this.point.percentage + "%</span>";
                        },
                        style: {
                            color: '#fff',
                            fontSize: '14px'
                        }
                    },
                    credits: {
                        enabled: false
                    },
                    colors: [
                        '#DEE2EB', '#A5C8DE', '#C5B2E9', '#97C1DA', '#FCB319', '#86A033', '#614931', '#00526F', '#594266', '#cb6828', '#aaaaab', '#a89375'
                    ],
                    title: {
                        useHTML: true,
                        verticalAlign: 'middle',
                        floating: false,
                        text: "<div style='margin-top: -17px; display: inline-block; line-height: 1.1; color: #667585; text-align: center'><span style='font-size: 28px; font-weight: 500'>34.5%</span><br><span style='font-size: 13px'>Something</span></div>",
                    },
                    plotOptions: {
                        pie: {
                            allowPointSelect: true,
                            cursor: 'pointer',
                            startAngle: -35,
                            showInLegend: true,
                            dataLabels: {
                                enabled: false,
                                formatter: function() {
                                    return this.percentage.toFixed(2) + '%';
                                }
                            }
                        }
                    },
                    legend: {
                        enabled: false,
                    },
                    series: [{
                        type: 'pie',
                        size: '100%',
                        innerSize: '90%',
                        states: {
                            hover: {
                                enabled: false
                            }
                        },
                        dataLabels: {

                        },
                        data: [
                            ['Item', 34.5],
                            ['Item', 65.5]
                        ],
                        symbolRadius: 100
                    }]
                },
                function(chart) { // on complete

                }
            );
        }, 0);
    }
}

@Directive({
    selector: "[chart-2-chart]"
})
export class Chart2Chart {
    constructor(el: ElementRef) {
        //timeout of '0' needed to allow containers to load
        setTimeout(function(){
            $(el.nativeElement).highcharts({
                    chart: {
                        renderTo: 'container',
                        type: 'pie',
                        margin: 0,
                        height: 190,
                        borderRadius: 0
                    },
                    tooltip: {
                        useHTML: true,
                        borderRadius: 6,
                        shadow: false,
                        backgroundColor: 'transparent',
                        borderColor: 'transparent',
                        formatter: function() {
                            return "<span class='ttip'>" + this.point.percentage + "%</span>";
                        },
                        style: {
                            color: '#fff',
                            fontSize: '14px'
                        }
                    },
                    credits: {
                        enabled: false
                    },
                    colors: [
                        '#DEE2EB', '#AFE5DA', '#C5B2E9', '#97C1DA', '#FCB319', '#86A033', '#614931', '#00526F', '#594266', '#cb6828', '#aaaaab', '#a89375'
                    ],
                    title: {
                        useHTML: true,
                        verticalAlign: 'middle',
                        floating: false,
                        text: "<div style='margin-top: -17px; display: inline-block; line-height: 1.1; color: #667585; text-align: center'><span style='font-size: 28px; font-weight: 500'>34.5%</span><br><span style='font-size: 13px'>Something</span></div>",
                    },
                    plotOptions: {
                        pie: {
                            allowPointSelect: true,
                            cursor: 'pointer',
                            startAngle: -35,
                            showInLegend: true,
                            dataLabels: {
                                enabled: false,
                                formatter: function() {
                                    return this.percentage.toFixed(2) + '%';
                                }
                            }
                        }
                    },
                    legend: {
                        enabled: false,
                    },
                    series: [{
                        type: 'pie',
                        size: '100%',
                        innerSize: '90%',
                        states: {
                            hover: {
                                enabled: false
                            }
                        },
                        dataLabels: {

                        },
                        data: [
                            ['Item', 34.5],
                            ['Item', 65.5]
                        ],
                        symbolRadius: 100
                    }]
                },
                function(chart) { // on complete

                }
            );
        }, 0);
    }
}

@Directive({
    selector: "[chart-3-chart]"
})
export class Chart3Chart {
    constructor(el: ElementRef) {
        //timeout of '0' needed to allow containers to load
        setTimeout(function(){
            $(el.nativeElement).highcharts({
                    chart: {
                        renderTo: 'container',
                        type: 'pie',
                        margin: 0,
                        height: 190,
                        borderRadius: 0
                    },
                    tooltip: {
                        useHTML: true,
                        borderRadius: 6,
                        shadow: false,
                        backgroundColor: 'transparent',
                        borderColor: 'transparent',
                        formatter: function() {
                            return "<span class='ttip'>" + this.point.percentage + "%</span>";
                        },
                        style: {
                            color: '#fff',
                            fontSize: '14px'
                        }
                    },
                    credits: {
                        enabled: false
                    },
                    colors: [
                        '#DEE2EB', '#5D6979', '#C5B2E9', '#97C1DA', '#FCB319', '#86A033', '#614931', '#00526F', '#594266', '#cb6828', '#aaaaab', '#a89375'
                    ],
                    title: {
                        useHTML: true,
                        verticalAlign: 'middle',
                        floating: false,
                        text: "<div style='margin-top: -17px; display: inline-block; line-height: 1.1; color: #667585; text-align: center'><span style='font-size: 28px; font-weight: 500'>34.5%</span><br><span style='font-size: 13px'>Something</span></div>",
                    },
                    plotOptions: {
                        pie: {
                            allowPointSelect: true,
                            cursor: 'pointer',
                            startAngle: -35,
                            showInLegend: true,
                            dataLabels: {
                                enabled: false,
                                formatter: function() {
                                    return this.percentage.toFixed(2) + '%';
                                }
                            }
                        }
                    },
                    legend: {
                        enabled: false,
                    },
                    series: [{
                        type: 'pie',
                        size: '100%',
                        innerSize: '90%',
                        states: {
                            hover: {
                                enabled: false
                            }
                        },
                        dataLabels: {

                        },
                        data: [
                            ['Item', 34.5],
                            ['Item', 65.5]
                        ],
                        symbolRadius: 100
                    }]
                },
                function(chart) { // on complete

                }
            );
        }, 0);
    }
}

@Directive({
    selector: "[line-chart]"
})
export class LineChart {
    constructor(el: ElementRef) {
        //timeout of '0' needed to allow containers to load
        setTimeout(function(){
            $(el.nativeElement).highcharts({
                chart: {
                    height: 250,
                    margin: [10, 10, 40, 30]
                },
                title: {
                    text: null
                },
                credits: {
                    enabled: false
                },
                xAxis: {
                    categories: ['Item 1', 'Item 2', 'Item 3', 'Item 4', 'Item 5', 'Item 6',
                        'Item 7', 'Item 8', 'Item 9', 'Item 10', 'Item 11'
                    ],
                    tickColor: null
                },
                yAxis: {
                    title: {
                        text: null
                    },
                    plotLines: [{
                        value: 0,
                        width: 1,
                        color: '#e8e8e8'
                    }],
                    gridLineColor: '#e8e8e8',
                    tickInterval: 10
                },
                tooltip: {
                    useHTML: true,
                    borderRadius: 6,
                    shadow: false,
                    backgroundColor: 'transparent',
                    borderColor: 'transparent',
                    formatter: function() {
                        return "<span class='ttip'>" + this.y + "%</span>";
                    },
                    style: {
                        color: '#fff',
                        fontSize: '14px'
                    }
                },
                legend: {
                    enabled: false,
                },
                plotOptions: {
                    pointPlacement: 'between'
                },
                series: [{
                    name: 'Chart Line 1',
                    data: [10, 40, 50, 40, 40, 50, 30, 20, 30, 20, 10],
                    lineColor: '#AFE5DA',
                    marker: {
                        fillColor: '#FFFFFF',
                        lineWidth: 2,
                        lineColor: '#AFE5DA',
                        width: 5,
                        height: 5,
                        radius: 6
                    }
                }, {
                    name: 'Chart Line 2',
                    data: [10, 20, 30, 20, 20, 10, 20, 30, 10, 10, 20],
                    lineColor: '#97C1DA',
                    marker: {
                        fillColor: '#FFFFFF',
                        lineWidth: 2,
                        lineColor: '#97C1DA',
                        width: 5,
                        height: 5,
                        radius: 6,
                        symbol: 'circle'
                    }
                }]
            });
        }, 0);
    }
}

@Directive({
    selector: "[area-chart]"
})
export class AreaChart {
    constructor(el: ElementRef) {
        //timeout of '0' needed to allow containers to load
        setTimeout(function(){
            $(el.nativeElement).highcharts({
                chart: {
                    type: 'spline',
                    height: 260,
                    margin: [30, 40, 35, 30]
                },
                title: {
                    text: null
                },
                credits: {
                    enabled: false
                },
                xAxis: {
                    categories: ['Item 1', 'Item 2', 'Item 3', 'Item 4', 'Item 5', 'Item 6',
                        'Item 7', 'Item 8', 'Item 9', 'Item 10', 'Item 11'
                    ],
                    tickColor: null
                },
                yAxis: {
                    title: {
                        text: null
                    },
                    plotLines: [{
                        value: 0,
                        width: 1,
                        color: '#e8e8e8'
                    }],
                    gridLineColor: '#e8e8e8',
                    tickInterval: 10,
                },
                tooltip: {
                    useHTML: true,
                    borderRadius: 6,
                    shadow: false,
                    backgroundColor: 'transparent',
                    borderColor: 'transparent',
                    formatter: function() {
                        return "<span class='ttip'>" + this.y + "%</span>";
                    },
                    style: {
                        color: '#fff',
                        fontSize: '14px'
                    }
                },
                legend: {
                    enabled: false,
                },
                plotOptions: {

                },
                series: [{
                    name: 'Chart Line 2',
                    type: 'areaspline',
                    fillColor: {
                        linearGradient: [0, 0, 0, 300],
                        stops: [
                            [0, '#AFE5DA'],
                            [1, 'rgba(255,255,255,0)']
                        ]
                    },
                    marker: {
                        enabled: false
                    },
                    lineColor: '#AFE5DA',
                    data: [
                        [0, 30],
                        [1, 45],
                        [2, 32],
                        [3, 63],
                        [4, 20],
                        [5, 62],
                        [6, 25],
                        [7, 55],
                        [8, 45],
                        [9, 58],
                        [10, 50]
                    ]
                }]
            });
        }, 0);
    }
}

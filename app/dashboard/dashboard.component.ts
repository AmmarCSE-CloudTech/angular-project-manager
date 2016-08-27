import { Component } from '@angular/core';

@Component({
    selector: 'dashboard',
    styleUrls: ['app/dashboard/dashboard.component.css'],
    templateUrl: 'app/dashboard/dashboard.component.html'
})

export class DashboardComponent {
    constructor(){
        var activeLink = document.querySelector('li.active');
        activeLink && (activeLink.className = '');

        var dashboardLink = document.getElementById('DashboardLink');
        dashboardLink.className = 'active';

        var main = document.getElementById('main');
        main.className = 'project-home';
    }
}

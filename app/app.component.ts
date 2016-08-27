import { Component } from '@angular/core';
import { Router, NavigationStart } from '@angular/router';
import { BackToTop }      from './plugin-directives/back-to-top.directive';

@Component({
    selector: 'project-manager-app',
    directives: [BackToTop],
    styleUrls: ['app/app.component.css'],
    templateUrl: 'app/app.component.html'
})
export class AppComponent {
    constructor(router:Router) {
        //yes, this is dirty
        //ideally, the child would be doing this without the need to subscribe to routing events
        router.events.subscribe((event:Event) => {
            if(event instanceof NavigationStart) {
                var activeLink = document.querySelector('li.active');
                activeLink.className = '';
                var main = document.getElementById('main');
                if(event.url == '/project-list'){
                    main.className = 'project-list';
                    var projectsLink = document.getElementById('ProjectsLink');
                    projectsLink.className = 'active';
                }
                else{
                    if(event.url == '/dashboard'){
                        main.className = 'project-list';
                        var dashboardLink = document.getElementById('DashboardLink');
                        dashboardLink.className = 'active';
                    }

                    main.className = 'project-home';
                }
            }
        });
    }
}

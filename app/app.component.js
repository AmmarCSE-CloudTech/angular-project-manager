"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var router_1 = require('@angular/router');
var back_to_top_directive_1 = require('./plugin-directives/back-to-top.directive');
var AppComponent = (function () {
    function AppComponent(router) {
        //yes, this is dirty
        //ideally, the child would be doing this without the need to subscribe to routing events
        router.events.subscribe(function (event) {
            if (event instanceof router_1.NavigationStart) {
                var activeLink = document.querySelector('li.active');
                activeLink.className = '';
                var main = document.getElementById('main');
                if (event.url == '/project-list') {
                    main.className = 'project-list';
                    var projectsLink = document.getElementById('ProjectsLink');
                    projectsLink.className = 'active';
                }
                else {
                    if (event.url == '/dashboard') {
                        main.className = 'project-list';
                        var dashboardLink = document.getElementById('DashboardLink');
                        dashboardLink.className = 'active';
                    }
                    main.className = 'project-home';
                }
            }
        });
    }
    AppComponent = __decorate([
        core_1.Component({
            selector: 'project-manager-app',
            directives: [back_to_top_directive_1.BackToTop],
            styleUrls: ['app/app.component.css'],
            templateUrl: 'app/app.component.html'
        }), 
        __metadata('design:paramtypes', [router_1.Router])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map
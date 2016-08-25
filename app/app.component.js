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
var back_to_top_directive_1 = require('./plugin-directives/back-to-top.directive');
var AppComponent = (function () {
    function AppComponent() {
    }
    AppComponent = __decorate([
        core_1.Component({
            selector: 'project-manager-app',
            directives: [back_to_top_directive_1.BackToTop],
            styleUrls: ['app/app.component.css'],
            template: "\n        <menu-bar></menu-bar>\n        <router-outlet></router-outlet>\n        <footer id=\"footer\">\n            <div class=\"container\">\n                Motabi \u00A9 2016. Material on this site may not be reproduced, distributed, transmitted or otherwise used without the prior written consent of  Motabi.\n            </div>\n        </footer>\n        <div class=\"back-to-top\" back-to-top><i class=\"fa fa-angle-up fa-3x\"></i></div>\n    ",
        }), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map
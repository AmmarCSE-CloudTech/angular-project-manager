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
var BackToTop = (function () {
    function BackToTop(el) {
        // fade in .back-to-top
        $(window).scroll(function () {
            if ($(this).scrollTop() > 500) {
                $(el.nativeElement).fadeIn();
            }
            else {
                $(el.nativeElement).fadeOut();
            }
        });
        // scroll body to 0px on click
        $(el.nativeElement).click(function () {
            $('html,body').animate({
                scrollTop: 0
            }, 1500);
            return false;
        });
    }
    BackToTop = __decorate([
        core_1.Directive({
            selector: "[back-to-top]"
        }), 
        __metadata('design:paramtypes', [core_1.ElementRef])
    ], BackToTop);
    return BackToTop;
}());
exports.BackToTop = BackToTop;
//# sourceMappingURL=back-to-top.directive.js.map
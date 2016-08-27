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
var ColorRadioInputs = (function () {
    function ColorRadioInputs(el) {
        $(el.nativeElement).iCheck({
            checkboxClass: 'icheck_box icheckbox_css',
            radioClass: 'icheck_box iradio_css',
            increaseArea: '20%',
            inheritClass: true
        });
    }
    ColorRadioInputs = __decorate([
        core_1.Directive({
            selector: "[color-radio-inputs]"
        }), 
        __metadata('design:paramtypes', [core_1.ElementRef])
    ], ColorRadioInputs);
    return ColorRadioInputs;
}());
exports.ColorRadioInputs = ColorRadioInputs;
//# sourceMappingURL=color-radio-inputs.directive.js.map
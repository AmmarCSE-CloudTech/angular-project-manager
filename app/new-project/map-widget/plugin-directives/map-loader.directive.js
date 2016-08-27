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
var MapLoader = (function () {
    function MapLoader(el) {
        this.initMap(el.nativeElement);
    }
    MapLoader.prototype.initMap = function (mapElement) {
        console.log('hey');
        var mapOptions = {
            zoom: 13,
            center: new google.maps.LatLng(59.32522, 18.07002),
            disableDefaultUI: true
        };
        var map = new google.maps.Map(mapElement, mapOptions);
        var marker = new google.maps.Marker({
            map: map,
            position: new google.maps.LatLng(59.327383, 18.06747),
            icon: 'assets/img/assets.extend/pin.png'
        });
    };
    MapLoader = __decorate([
        core_1.Directive({
            selector: "[map-loader]"
        }), 
        __metadata('design:paramtypes', [core_1.ElementRef])
    ], MapLoader);
    return MapLoader;
}());
exports.MapLoader = MapLoader;
//# sourceMappingURL=map-loader.directive.js.map
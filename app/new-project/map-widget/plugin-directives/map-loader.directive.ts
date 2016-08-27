declare var google: any;

import { Component, Directive, ElementRef } from '@angular/core'

@Directive({
    selector: "[map-loader]"
})

export class MapLoader {
    constructor(el: ElementRef) {
        this.initMap(el.nativeElement);
    }

    initMap(mapElement) {
console.log('hey')
        var mapOptions = {
            zoom: 13,
            center: new google.maps.LatLng(59.32522, 18.07002),
            disableDefaultUI: true
        };

        var map = new google.maps.Map(mapElement,
            mapOptions);

        var marker = new google.maps.Marker({
            map: map,
            position: new google.maps.LatLng(59.327383, 18.06747),
            icon: 'assets/img/assets.extend/pin.png'
        });

    }
}

import { Component, Directive, ElementRef } from '@angular/core'

@Directive({
    selector: "[map-loader]"
})
export class MapLoader {
    constructor(el: ElementRef) {
        $.extend(true, window, {
            initMap
        });

        var script   = document.createElement("script");
        script.type  = "text/javascript";
        script.src   = "https://maps.googleapis.com/maps/api/js?key=AIzaSyDrTMAU49iHSHYKiJlZBZGn2XBBRa7cZVc&callback=initMap"; 
        document.body.appendChild(script);
    }

    function initMap() {
        var mapOptions = {
            zoom: 13,
            center: new google.maps.LatLng(59.32522, 18.07002),
            disableDefaultUI: true
        };

        var map = new google.maps.Map(document.getElementById('map'),
            mapOptions);

        var marker = new google.maps.Marker({
            map: map,
            position: new google.maps.LatLng(59.327383, 18.06747),
            icon: 'assets/img/assets.extend/pin.png'
        });

    }
}

declare var $: any;

import {Component, Directive, ElementRef} from '@angular/core'

@Directive({
  selector: "[sticky]"
})
export class Sticky {
  constructor(el: ElementRef) {

    $(el.nativeElement).sticky({ topSpacing: 0 });
    $(window).resize(function() {
        $(el.nativeElement).unstick();
        $(el.nativeElement).sticky({ topSpacing: 0 });			
    });	
 }
}

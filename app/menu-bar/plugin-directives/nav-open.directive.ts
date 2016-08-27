declare var $ : any;

import {Component, Directive, ElementRef} from '@angular/core'

@Directive({
  selector: "[nav-open]"
})
export class NavOpen {
  constructor(el: ElementRef) {
    // On hover, open drop down
    $(el.nativeElement).on({
        mouseenter: function() {
          $(this).addClass('open');
        }, mouseleave: function() {
          $(this).removeClass('open');
        }
    });
 }
}

import {Component, Directive, ElementRef} from '@angular/core'

@Directive({
  selector: "[back-to-top]"
})
export class BackToTop {
  constructor(el: ElementRef) {
    // fade in .back-to-top
    $(window).scroll(function () {
        if ($(this).scrollTop() > 500) {
            $(el.nativeElement).fadeIn();
        } else {
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
}

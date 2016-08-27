declare var $: any;

import {Component, Directive, ElementRef} from '@angular/core'

@Directive({
  selector: "[color-radio-inputs]"
})
export class ColorRadioInputs {
  constructor(el: ElementRef) {
    $(el.nativeElement).iCheck({
        checkboxClass: 'icheck_box icheckbox_css',
        radioClass: 'icheck_box iradio_css',
        increaseArea: '20%',
        inheritClass: true
    });
  }
}

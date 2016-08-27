
import {Component, Directive, ElementRef} from '@angular/core'

@Directive({
  selector: "[date-picker]"
})
export class DatePicker {
  constructor(el: ElementRef) {
    $(el.nativeElement).datepicker({
        defaultDate: "+1w",
        changeMonth: true,
        numberOfMonths: 1,
        onClose: function( selectedDate ) {
            var opposite = $(el.nativeElement).attr('date-opposite');
            var limit = $(el.nativeElement).attr('date-opposite-limit');
            $(opposite).datepicker( "option", limit, selectedDate );
        }
    });
  }
}

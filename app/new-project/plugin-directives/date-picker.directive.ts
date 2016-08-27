
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
            $($(el.nativeElement).attr('date-opposite')).datepicker( "option", "minDate", selectedDate );
        }
    });
  }
}

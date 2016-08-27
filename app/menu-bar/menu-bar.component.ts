import { Component } from '@angular/core';
import { Sticky } from './plugin-directives/sticky.directive';

@Component({
    selector: 'menu-bar',
    directives: [Sticky],
    styleUrls: ['app/menu-bar/menu-bar.component.css'],
    templateUrl: 'app/menu-bar/menu-bar.component.html'
})

export class MenuBarComponent {
}

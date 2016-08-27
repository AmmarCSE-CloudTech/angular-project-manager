import { Component } from '@angular/core';
import { NavOpen } from '../plugin-directives/nav-open.directive'

@Component({
    selector: 'menu-nav',
    directives: [NavOpen],
    styleUrls: ['app/menu-bar/menu-nav/menu-nav.component.css'],
    templateUrl: 'app/menu-bar/menu-nav/menu-nav.component.html'
})

export class MenuNavComponent {
}

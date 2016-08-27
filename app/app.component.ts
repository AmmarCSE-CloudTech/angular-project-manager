import { Component } from '@angular/core';
import { BackToTop }      from './plugin-directives/back-to-top.directive';

@Component({
    selector: 'project-manager-app',
    directives: [BackToTop],
    templateUrl: 'app/app.component.html'
})
export class AppComponent {
}

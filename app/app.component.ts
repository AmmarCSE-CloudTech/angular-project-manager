import { Component } from '@angular/core';
import { BackToTop }      from './plugin-directives/back-to-top.directive';

@Component({
    selector: 'project-manager-app',
    directives: [BackToTop],
    styleUrls: ['app/app.component.css'],
    template: `
        <menu-bar></menu-bar>
        <router-outlet></router-outlet>
        <footer id="footer">
            <div class="container">
                Motabi © 2016. Material on this site may not be reproduced, distributed, transmitted or otherwise used without the prior written consent of  Motabi.
            </div>
        </footer>
        <div class="back-to-top" back-to-top><i class="fa fa-angle-up fa-3x"></i></div>
    `,
})
export class AppComponent {
}

import { Component } from '@angular/core';
import {MapLoader} from './map-widget/plugin-directives/map-loader.directive'

@Component({
    selector: 'new-project',
    directives: [MapLoader],
    styleUrls: ['app/new-project/new-project.component.css'],
    templateUrl: 'app/new-project/new-project.component.html'
})

export class NewProjectComponent {
}

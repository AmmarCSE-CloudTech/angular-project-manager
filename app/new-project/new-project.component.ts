import { Component } from '@angular/core';
import { Router }            from '@angular/router';
import {MapLoader} from './map-widget/plugin-directives/map-loader.directive'
import {ColorRadioInputs} from './plugin-directives/color-radio-inputs.directive'
import {DatePicker} from './plugin-directives/date-picker.directive'
import { Project } from '../shared/project.model'
import { ProjectService } from '../shared/project.service'

@Component({
    selector: 'new-project',
    directives: [MapLoader, ColorRadioInputs, DatePicker],
    styleUrls: ['app/new-project/new-project.component.css'],
    templateUrl: 'app/new-project/new-project.component.html'
})

export class NewProjectComponent {
    constructor( private router: Router, private projectService: ProjectService) {
        this.project = new Project();
    }

    save(): void {
        this.projectService
            .save(this.project)
            .then(project => {
              //this.project = project; 
              this.goProjectList();
            })
            .catch(error => this.error = error); // TODO: Display error message
    }

    goProjectList(): void {
        this.router.navigate(['/project-list']);
    }
}

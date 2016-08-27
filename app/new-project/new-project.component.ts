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
    templateUrl: 'app/new-project/new-project.component.html'
})

export class NewProjectComponent {
    project: Project = new Project();
    error: any;

    constructor( private router: Router, private projectService: ProjectService) {

        //set some defaults
        this.project.language = 'ar-Sa';
        this.project.location = 'Jeddah';
        this.project.status = 'initiated';

        var activeLink = document.querySelector('li.active');
        activeLink && (activeLink.className = '');

        var main = document.getElementById('main');
        main.className = 'project-home';
    }

    save(): void {
        //need better way to check if form is valid other than simply checking for name
        this.project.name && this.projectService
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

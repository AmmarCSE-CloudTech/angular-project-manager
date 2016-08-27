import { Component, OnInit } from '@angular/core';
import { Project } from '../shared/project.model'
import { ProjectService } from '../shared/project.service'

@Component({
    selector: 'project-list',
    styleUrls: ['app/project-list/project-list.component.css'],
    templateUrl: 'app/project-list/project-list.component.html'
})

export class ProjectListComponent implements OnInit {
    projects: Project[];
    selectedProject: Project;
    addingProject = false;
    error: any;

    constructor(private projectService: ProjectService) {
        var activeLink = document.querySelector('li.active');
        activeLink && (activeLink.className = '');

        var projectListLink = document.getElementById('ProjectsLink');
        projectListLink.className = 'active';

        var main = document.getElementById('main');
        main.className = 'project-list';
    }

    getProjects(): void {
        this.projectService
            .getProjects()
            .then(projects => this.projects = projects)
            .catch(error => this.error = error);
    }

    addProject(): void {
        this.addingProject = true;
        this.selectedProject = null;
    }

    close(savedProject: Project): void {
        this.addingProject = false;
        if (savedProject) {
            this.getProjects();
        }
    }

    ngOnInit(): void {
        this.getProjects();
    }
}

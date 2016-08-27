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

    constructor(private projectService: ProjectService) {}

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

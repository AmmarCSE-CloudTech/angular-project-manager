"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var project_service_1 = require('../shared/project.service');
var ProjectListComponent = (function () {
    function ProjectListComponent(projectService) {
        this.projectService = projectService;
        this.addingProject = false;
        var activeLink = document.querySelector('li.active');
        activeLink && (activeLink.className = '');
        var projectListLink = document.getElementById('ProjectsLink');
        projectListLink.className = 'active';
        var main = document.getElementById('main');
        main.className = 'project-list';
    }
    ProjectListComponent.prototype.getProjects = function () {
        var _this = this;
        this.projectService
            .getProjects()
            .then(function (projects) { return _this.projects = projects; })
            .catch(function (error) { return _this.error = error; });
    };
    ProjectListComponent.prototype.addProject = function () {
        this.addingProject = true;
        this.selectedProject = null;
    };
    ProjectListComponent.prototype.close = function (savedProject) {
        this.addingProject = false;
        if (savedProject) {
            this.getProjects();
        }
    };
    ProjectListComponent.prototype.ngOnInit = function () {
        this.getProjects();
    };
    ProjectListComponent = __decorate([
        core_1.Component({
            selector: 'project-list',
            styleUrls: ['app/project-list/project-list.component.css'],
            templateUrl: 'app/project-list/project-list.component.html'
        }), 
        __metadata('design:paramtypes', [project_service_1.ProjectService])
    ], ProjectListComponent);
    return ProjectListComponent;
}());
exports.ProjectListComponent = ProjectListComponent;
//# sourceMappingURL=project-list.component.js.map
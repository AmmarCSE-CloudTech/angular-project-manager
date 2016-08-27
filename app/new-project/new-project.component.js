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
var router_1 = require('@angular/router');
var map_loader_directive_1 = require('./map-widget/plugin-directives/map-loader.directive');
var color_radio_inputs_directive_1 = require('./plugin-directives/color-radio-inputs.directive');
var date_picker_directive_1 = require('./plugin-directives/date-picker.directive');
var project_model_1 = require('../shared/project.model');
var project_service_1 = require('../shared/project.service');
var NewProjectComponent = (function () {
    function NewProjectComponent(router, projectService) {
        this.router = router;
        this.projectService = projectService;
        this.project = new project_model_1.Project();
    }
    NewProjectComponent.prototype.save = function () {
        var _this = this;
        this.projectService
            .save(this.project)
            .then(function (project) {
            //this.project = project; 
            _this.goProjectList();
        })
            .catch(function (error) { return _this.error = error; }); // TODO: Display error message
    };
    NewProjectComponent.prototype.goProjectList = function () {
        this.router.navigate(['/project-list']);
    };
    NewProjectComponent = __decorate([
        core_1.Component({
            selector: 'new-project',
            directives: [map_loader_directive_1.MapLoader, color_radio_inputs_directive_1.ColorRadioInputs, date_picker_directive_1.DatePicker],
            styleUrls: ['app/new-project/new-project.component.css'],
            templateUrl: 'app/new-project/new-project.component.html'
        }), 
        __metadata('design:paramtypes', [router_1.Router, project_service_1.ProjectService])
    ], NewProjectComponent);
    return NewProjectComponent;
}());
exports.NewProjectComponent = NewProjectComponent;
//# sourceMappingURL=new-project.component.js.map
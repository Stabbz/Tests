System.register(['angular2/core', './exercise-detail.component', './exercise.service', 'angular2/http'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, exercise_detail_component_1, exercise_service_1, http_1;
    var AppComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (exercise_detail_component_1_1) {
                exercise_detail_component_1 = exercise_detail_component_1_1;
            },
            function (exercise_service_1_1) {
                exercise_service_1 = exercise_service_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            }],
        execute: function() {
            AppComponent = (function () {
                function AppComponent(http) {
                    var _this = this;
                    this.title = 'Exercise Tracking';
                    http.get('http://localhost:8080/fit-track-services/exercises').subscribe(function (res) {
                        _this.exes = res.json();
                        console.log(_this.exes);
                    });
                }
                AppComponent.prototype.ngOnInit = function () {
                    // this.getExercises();
                };
                AppComponent.prototype.getExercises = function () {
                    // this._exerciseService.getExercises().then(exes => this.exes = exes);
                };
                AppComponent.prototype.onSelect = function (ex) { this.selectedExercise = ex; };
                AppComponent = __decorate([
                    core_1.Component({
                        selector: 'my-app',
                        bindings: [http_1.HTTP_BINDINGS],
                        template: "\n  \t<div>\n\t  \t<h1>{{title}}</h1>\n\t  \t<h2>My Exercises</h2>\n\t  \t<div>\n\t\t\t<label>name: </label>\n\t\t\t<input placeholder= \"name\" />\n\t\t\t<button type=\"button\" class=\"btn btn-info btn-md\">Add Exercise</button>\n\t\t</div>\n  \t</div>\n  \t<div class=\"col-xs-4\">\n\t\t<ul class=\"list-group\">\n\t\t\t<li><a> TODO: List of exercise history </a></li>\n\t\t  \t<li class=\"list-group-item exercise-row\" *ngFor=\"#exercise of exes\"\n\t\t\t  \t[class.selected]=\"exercise === selectedExercise\"\n\t\t\t  \t(click)=\"onSelect(exercise)\">\n\t\t    \t<span class=\"badge\">{{exercise.id}}</span> {{exercise.name}}\n\t\t  \t</li>\n\t\t</ul>\n\t</div>\n\t<div class=\"col-xs-12\">\n\t\t<my-exercise-detail [exercise]=\"selectedExercise\"></my-exercise-detail>\n  \t</div>\n  \t",
                        styles: ["\n    .selected {\n      background-color: #CFD8DC !important;\n      color: white;\n    }\n    .exercises {\n      \n    }\n    .exercise-row {\n      cursor: pointer;\n      position: relative;\n    }\n    .exercise-row.selected:hover {\n      color: white;\n    }\n    .exercise-row:hover {\n      color: #607D8B;\n      background-color: #EEE;\n      left: .1em;\n    }\n    .exercises .text {\n      position: relative;\n      top: -3px;\n    }\n    .exercises .badge {\n      display: inline-block;\n      font-size: small;\n      color: white;\n      padding: 0.8em 0.7em 0em 0.7em;\n      background-color: #607D8B;\n      line-height: 1em;\n      position: relative;\n      left: -1px;\n      top: -4px;\n      height: 1.8em;\n      margin-right: .8em;\n      border-radius: 4px 0px 0px 4px;\n    }\n  "],
                        directives: [exercise_detail_component_1.ExerciseDetailComponent],
                        providers: [exercise_service_1.ExerciseService]
                    }), 
                    __metadata('design:paramtypes', [http_1.Http])
                ], AppComponent);
                return AppComponent;
            })();
            exports_1("AppComponent", AppComponent);
        }
    }
});
//# sourceMappingURL=app.component.js.map
System.register(['angular2/core', './exercise.service', 'angular2/http'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, exercise_service_1, http_1;
    var ExerciseDetailComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (exercise_service_1_1) {
                exercise_service_1 = exercise_service_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            }],
        execute: function() {
            ExerciseDetailComponent = (function () {
                function ExerciseDetailComponent(http, _exerciseService) {
                    this.http = http;
                    this._exerciseService = _exerciseService;
                }
                ExerciseDetailComponent.prototype.deleteExercise = function (id) {
                    var _this = this;
                    var idParam = "id=" + id;
                    this.http.delete('http://localhost:8080/fit-track-services/exercises?' + idParam)
                        .subscribe(function (res) {
                        console.log("Successfully deleted exercise!");
                        _this._exerciseService.getExercises();
                    });
                };
                ExerciseDetailComponent = __decorate([
                    core_1.Component({
                        selector: 'my-exercise-detail',
                        providers: [exercise_service_1.ExerciseService],
                        template: " \n\t<div *ngIf=\"exercise\">\n\t  \t<h2>{{exercise.name }} details! Current Weight: {{exercise.weight }} and Repetitions: {{exercise.reps}}</h2>\n\t  \t<div> <label>id: </label>{{exercise.id}} <button (click)=\"deleteExercise(exercise.id)\" type=\"button\" class=\"btn btn-info btn-md\">Delete Exercise</button></div>\n\t\t<div>\n\t\t\t<label>name: </label>\n\t\t\t<input [(ngModel)]=\"exercise.name\" placeholder= \"name\" />\n\n\t\t\t<label>weight: </label>\n\t\t\t<input [(ngModel)]=\"exercise.weight\" placeholder= \"weight\" />\n\n\t\t\t<label>reps: </label>\n\t\t\t<input [(ngModel)]=\"exercise.reps\" placeholder= \"reps\" />\n\n\t\t\t<ul class=\"exercises\">\n\t\t\t  <li *ngFor=\"#exercise of exes\" >\n\t\t\t    <span class=\"badge\">{{exercise.id}}</span> {{exercise.name}}\n\t\t\t  </li>\n\t\t\t</ul>\n\t  \t</div>\n\t</div>\n\t\n\t",
                        inputs: ['exercise']
                    }), 
                    __metadata('design:paramtypes', [http_1.Http, exercise_service_1.ExerciseService])
                ], ExerciseDetailComponent);
                return ExerciseDetailComponent;
            })();
            exports_1("ExerciseDetailComponent", ExerciseDetailComponent);
        }
    }
});
//# sourceMappingURL=exercise-detail.component.js.map
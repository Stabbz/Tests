System.register(['angular2/platform/browser', './app.component', 'angular2/http', './exercise.service'], function(exports_1) {
    var browser_1, app_component_1, http_1, exercise_service_1;
    return {
        setters:[
            function (browser_1_1) {
                browser_1 = browser_1_1;
            },
            function (app_component_1_1) {
                app_component_1 = app_component_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (exercise_service_1_1) {
                exercise_service_1 = exercise_service_1_1;
            }],
        execute: function() {
            browser_1.bootstrap(app_component_1.AppComponent, [http_1.HTTP_PROVIDERS, exercise_service_1.ExerciseService]);
        }
    }
});
//# sourceMappingURL=boot.js.map
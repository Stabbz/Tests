import {Component} from 'angular2/core';
import {OnInit} from 'angular2/core';
import {Exercise} from './exercise';
import {ExerciseDetailComponent} from './exercise-detail.component';
import {ExerciseService} from './exercise.service';
import {HTTP_BINDINGS, Http} from 'angular2/http';
import 'rxjs/add/operator/toPromise';

@Component({
    selector: 'my-app',
    bindings: [HTTP_BINDINGS],
    providers: [ExerciseService],
    template:`
  	<div>
	  	<h1>{{title}}</h1>
	  	<ul class="list-group">
			<li><a><b> TODO: Delete Exercise Service and button! </b></a></li>
			<li><a> TODO: List of exercise history </a></li>
		</ul>
	  	<h2>My Exercises</h2>
	  	<div>
			<label>name: </label>
			<input #newExercise newExercise.value=''
		      placeholder= "name" />
			<button (click)="addExercise(newExercise.value)" type="button" class="btn btn-info btn-md">Add Exercise</button>
		</div>
  	</div>
  	<div class="col-xs-4">
		<ul class="list-group">
		  	<li class="list-group-item exercise-row" *ngFor="#exercise of exes"
			  	[class.selected]="exercise === selectedExercise"
			  	(click)="onSelect(exercise)">
		    	<span class="badge">{{exercise.id}}</span> {{exercise.name}}
		  	</li>
		</ul>
	</div>
	<div class="col-xs-8">
		<my-exercise-detail [exercise]="selectedExercise"></my-exercise-detail>
  	</div>
  	`,
	styles: [`
    .selected {
      background-color: #CFD8DC !important;
      color: white;
    }
    .exercises {
      
    }
    .exercise-row {
      cursor: pointer;
      position: relative;
    }
    .exercise-row.selected:hover {
      color: white;
    }
    .exercise-row:hover {
      color: #607D8B;
      background-color: #EEE;
      left: .1em;
    }
    .exercises .text {
      position: relative;
      top: -3px;
    }
    .exercises .badge {
      display: inline-block;
      font-size: small;
      color: white;
      padding: 0.8em 0.7em 0em 0.7em;
      background-color: #607D8B;
      line-height: 1em;
      position: relative;
      left: -1px;
      top: -4px;
      height: 1.8em;
      margin-right: .8em;
      border-radius: 4px 0px 0px 4px;
    }
  `],
	directives: [ExerciseDetailComponent]
})

export class AppComponent implements OnInit { 
	public exes: Exercise[];
	public selectedExercise: Exercise;
	public title = 'Exercise Tracking';
	public exData: Exercise[];

	

	constructor(public http: Http, private _exerciseService: ExerciseService) {
	}

	ngOnInit() {
		this.getExercises();
	}

	getExercises() {
		this._exerciseService.getExercises().then(exes => this.exes = exes);
	}

	addExercise(exName: String) {
		var nameParam = "exercisename=" + exName;
		this.http.post('http://localhost:8080/fit-track-services/exercises?' + nameParam, "")
		.subscribe(res => {
			this.getExercises();
		});
	}

	onSelect(ex: Exercise) { this.selectedExercise = ex; }
}





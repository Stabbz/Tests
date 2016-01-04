import {Component} from 'angular2/core';
import {OnInit} from 'angular2/core';
import {Exercise} from './exercise';
import {ExerciseDetailComponent} from './exercise-detail.component';
import {ExerciseService} from './exercise.service';
import {HTTP_BINDINGS, Http} from 'angular2/http';

@Component({
    selector: 'my-app',
    bindings: [HTTP_BINDINGS],
    template:`
  	<div>
	  	<h1>{{title}}</h1>
	  	<h2>My Exercises</h2>
	  	<div>
			<label>name: </label>
			<input placeholder= "name" />
			<button type="button" class="btn btn-info btn-md">Add Exercise</button>
		</div>
  	</div>
  	<div class="col-xs-4">
		<ul class="list-group">
			<li><a> TODO: List of exercise history </a></li>
		  	<li class="list-group-item exercise-row" *ngFor="#exercise of exes"
			  	[class.selected]="exercise === selectedExercise"
			  	(click)="onSelect(exercise)">
		    	<span class="badge">{{exercise.id}}</span> {{exercise.name}}
		  	</li>
		</ul>
	</div>
	<div class="col-xs-12">
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
	directives: [ExerciseDetailComponent],
	providers: [ExerciseService]
})

export class AppComponent implements OnInit { 
	public exes: Exercise[];
	public selectedExercise: Exercise;
	public title = 'Exercise Tracking';
	public exData: Exercise[];

	constructor(http: Http) {
		http.get('http://localhost:8080/fit-track-services/exercises').subscribe(res => {
			this.exes = res.json();
			console.log(this.exes);
		});
	}

	ngOnInit() {
		// this.getExercises();
	}

	getExercises() {

		// this._exerciseService.getExercises().then(exes => this.exes = exes);
	}

	onSelect(ex: Exercise) { this.selectedExercise = ex; }
}





import {Component} from 'angular2/core';
import {OnInit} from 'angular2/core';
import {Exercise} from './exercise';
import {ExerciseDetailComponent} from './exercise-detail.component';
import {ExerciseService} from './exercise.service';

@Component({
    selector: 'my-app',
    template:`
  	<h1>{{title}}</h1>
  	<h2>My Exercises</h2>
	<ul class="exercises">
		<li><a> TODO: List of exercise history </a></li>
	  <li *ngFor="#exercise of exes" 
	  	[class.selected]="exercise === selectedExercise"
	  	(click)="onSelect(exercise)">
	    <span class="badge">{{exercise.id}}</span> {{exercise.name}}
	  </li>
	</ul>
	<my-exercise-detail [exercise]="selectedExercise"></my-exercise-detail>
  	`,
	styles: [`
    .selected {
      background-color: #CFD8DC !important;
      color: white;
    }
    .exercises {
      margin: 0 0 2em 0;
      list-style-type: none;
      padding: 0;
      width: 10em;
    }
    .exercises li {
      cursor: pointer;
      position: relative;
      left: 0;
      background-color: #EEE;
      margin: .5em;
      padding: .3em 0em;
      height: 1.6em;
      border-radius: 4px;
    }
    .exercises li.selected:hover {
      color: white;
    }
    .exercises li:hover {
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
	constructor(private _exerciseService: ExerciseService) { }
	public selectedExercise: Exercise;
	public exes: Exercise[];
	public title = 'Exercise Tracking';

	ngOnInit() {
		this.getExercises();
	}

	getExercises() {
		this._exerciseService.getExercises().then(exes => this.exes = exes);
	}

	onSelect(ex: Exercise) { this.selectedExercise = ex; }
}





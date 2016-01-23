import {Component} from 'angular2/core';
import {Exercise} from './exercise';
import {ExerciseService} from './exercise.service';
import {HTTP_BINDINGS, Http} from 'angular2/http';

@Component({
	selector: 'my-exercise-detail',
	providers: [ExerciseService],
	template: ` 
	<div *ngIf="exercise">
	  	<h2>{{exercise.name }} details! Current Weight: {{exercise.weight }} and Repetitions: {{exercise.reps}}</h2>
	  	<div> <label>id: </label>{{exercise.id}} <button (click)="deleteExercise(exercise.id)" type="button" class="btn btn-info btn-md">Delete Exercise</button></div>
		<div>
			<label>name: </label>
			<input [(ngModel)]="exercise.name" placeholder= "name" />

			<label>weight: </label>
			<input [(ngModel)]="exercise.weight" placeholder= "weight" />

			<label>reps: </label>
			<input [(ngModel)]="exercise.reps" placeholder= "reps" />

			<ul class="exercises">
			  <li *ngFor="#exercise of exes" >
			    <span class="badge">{{exercise.id}}</span> {{exercise.name}}
			  </li>
			</ul>
	  	</div>
	</div>
	
	`,
	inputs: ['exercise']
})

export class ExerciseDetailComponent {
	public exercise: Exercise;

	constructor(public http: Http, private _exerciseService: ExerciseService) {
	}

	deleteExercise(id: number) {
		var idParam = "id=" + id;
		this.http.delete('http://localhost:8080/fit-track-services/exercises?' + idParam)
			.subscribe(res => {
				console.log("Successfully deleted exercise!");
				this._exerciseService.getExercises();
			});


	}
}
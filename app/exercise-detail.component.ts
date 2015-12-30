import {Component} from 'angular2/core';
import {Exercise} from './exercise';

@Component({
	selector: 'my-exercise-detail',
	template: ` 
	<div *ngIf="exercise">
	  	<h2>{{exercise.name }} details! Current Weight: {{exercise.weight }} and Repetitions: {{exercise.reps}}</h2>
	  	<div> <label>id: </label>{{exercise.id}}</div>
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
}
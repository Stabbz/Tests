import {Injectable} from 'angular2/core';
import {Exercise} from './exercise';
import {HTTP_BINDINGS, Http} from 'angular2/http';

@Injectable()
export class ExerciseService {

	public exes: Exercise[];

	constructor(public http: Http) {
	}

	// Call a service
	getExercises(){
		return this.http.get('http://localhost:8080/fit-track-services/exercises')
			.toPromise()
			.then((res) =>
				this.exes = res.json().reverse());
	}
}

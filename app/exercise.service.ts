import {Injectable} from 'angular2/core';
import {EXES} from './mock-exercises';

@Injectable()
export class ExerciseService {
	getExercises(){
		return Promise.resolve(EXES);
	}
}

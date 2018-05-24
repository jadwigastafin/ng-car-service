import { Injectable } from '@angular/core';
import { Car } from './models/car';
import { Observable } from 'rxjs/Observable';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map'; 

@Injectable()
export class CarsService {
  private apiUrl = "http://localhost:3000/api/cars";
  constructor(private http : Http) { }  //Http jest wbudowany w angulara

  getCars() : Observable<Car[]> { //observable zwraca tablicę samochodów. pochodzi z biblioteki rxjs, do obsługi asynchornicznych zapytań HTTP
    //Jest to strumień danych pod który możemy się podpiąć za pomocą metody SUBSCRIBE, którą używa się w komponencie
    return this.http.get(this.apiUrl) // parametrem get jest ścieżka do API
      .map((res) => res.json()) //map z biblioteki rxjs
  }

  getCar(id : number) : Observable<Car> {
    return this.http.get(this.apiUrl + `/${id}`)
      .map((res) => res.json())
  } 

}

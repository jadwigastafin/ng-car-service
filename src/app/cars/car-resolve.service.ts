import { CarsService } from "./cars.service";
import { ActivatedRouteSnapshot, Resolve } from "@angular/router";
import { Car } from "./models/car";
import { Injectable } from "@angular/core";

@Injectable()
export class CarResolve implements Resolve<Car> { //w serwisie implementujemy interfejs Resolve i podpisujemy kontrakt, zobowązujemy się użyć metodę,
  //która występuje w tym interfejsie, w tym interfejsie będzie występować metoda Resolve typu CAR, bo servis carResolve ma dostarczyć konkretny samochód
  constructor(private carsService : CarsService) {}

  resolve(route: ActivatedRouteSnapshot) {  //serwis który robi zapytanie http przed aktywacją widoku
    return this.carsService.getCar(route.params['id']);
  }
} 
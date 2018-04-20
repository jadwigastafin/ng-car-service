import { Component, OnInit } from '@angular/core';
import { Car } from '../models/car';

@Component({
  selector: 'cars-list',
  templateUrl: './cars-list.component.html',
  styleUrls: ['./cars-list.component.less']
})
export class CarsListComponent implements OnInit { //implementuje interfejs onInit czyli podpisuje kontrakt i muszę użyć niżej metody onInit

  totalCost : number;
  cars : Car[] = [
    {
      id: 1,
      model: 'Mazda Rx7',
      plate: 'GD2121E',
      deliveryDate: '21-04-2017',
      deadline: '05-05-2016',
      client: {
        firstName: 'Jan',
        surname: 'Kowal ski'
      },
      cost: 300,
      isFullyDamaged: true
    },
    {
      id: 2,
      model: 'Mercedes 124',
      plate: 'KRK2200',
      deliveryDate: '24-05-2017',
      deadline: '03-06-2016',
      client: {
        firstName: 'Micha³',
        surname: 'Nowak'
      },
      cost: 1200,
      isFullyDamaged: true
    },
    {
      id: 3,
      model: 'Renault CLIO',
      plate: 'GWE22011',
      deliveryDate: '02-02-2017',
      deadline: '03-03-2017',
      client: {
        firstName: 'Beata',
        surname: 'Dampc'
      },
      cost: 2800,
      isFullyDamaged: true
    }
  ]

  constructor() { }

  ngOnInit() {
    this.countPrice(); 
  }

  countPrice() : void {
    this.totalCost = this.cars
      .map((car) => car.cost)
      .reduce((prev, next) => prev + next); 
  }

}

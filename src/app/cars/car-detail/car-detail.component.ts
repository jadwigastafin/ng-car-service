import { Component, OnInit } from '@angular/core';
import { CarsService } from '../cars.service';
import { ActivatedRoute } from '@angular/router';
import { Car } from '../models/car';

@Component({
  selector: 'cs-car-detail',
  templateUrl: './car-detail.component.html',
  styleUrls: ['./car-detail.component.less']
})
export class CarDetailComponent implements OnInit {

  car : Car;
  constructor(private carsService : CarsService,
              private route : ActivatedRoute) { }

  ngOnInit() {
    this.loadCar();
  }

  loadCar() {
    this.car = this.route.snapshot.data['car']
  }

}

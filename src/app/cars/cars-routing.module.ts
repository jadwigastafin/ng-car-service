import { NgModule } from "@angular/core";
import { RouterModule, Route } from '@angular/router';
import { CarDetailComponent } from "./car-detail/car-detail.component";
import { CarResolve } from "./car-resolve.service";


const CARS_ROUTES : Route[] = [
  { 
    path: 'cars/:id',
    component: <any>CarDetailComponent,
    resolve: { car: CarResolve}
  }
  // :id to PARAMS, ścieżka mówi do jakiego komponentu ma nas przenieść
];

@NgModule({
  imports: [
    RouterModule.forChild(CARS_ROUTES) 
  ],
  exports: [
    RouterModule
  ]
})

export class CarsRoutingModule {};

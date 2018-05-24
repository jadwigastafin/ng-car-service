import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CarsListComponent } from './cars-list/cars-list.component';
import { TotalCostComponent } from './total-cost/total-cost.component';
import { HttpModule } from '@angular/http';
import { SharedModule } from '../shared-module/shared.module';
import { CarDetailComponent } from './car-detail/car-detail.component'
import { RouterModule } from '@angular/router';
import { CarResolve } from './car-resolve.service';

@NgModule({
  imports: [
    CommonModule,
    HttpModule,
    SharedModule,
    RouterModule
  ],
  providers: [CarResolve],
  exports: [CarsListComponent],
  declarations: [CarsListComponent, TotalCostComponent, CarDetailComponent]
})
export class CarsModule { }

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CarsModule } from './cars/cars.module';
import { CarsService } from './cars/cars.service';
import { HttpModule } from '@angular/http';
import { CoreModule } from './core-module/core.module'


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    CarsModule,
    HttpModule,
    CoreModule
  ],
  providers: [CarsService],  //tutaj podajemy wszystkie servisy. Jeśli serwis jest zadeklarowany bezpośrednio w komponencie to tworzy się nowa instancja tego serwisu.
  bootstrap: [AppComponent]
})
export class AppModule { }
 
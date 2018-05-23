import { Component, OnInit, ViewEncapsulation, ViewChild, AfterViewInit } from '@angular/core';
import { Car } from '../models/car';
import { TotalCostComponent } from '../total-cost/total-cost.component';
import { CarsService } from '../cars.service';

@Component({
  selector: 'cars-list',
  templateUrl: './cars-list.component.html',
  styleUrls: ['./cars-list.component.less'],
  encapsulation: ViewEncapsulation.None  //wszystkie style komponenty cars-list są teraz widoczne globalnie, inne komponenty mają do nich dostęp
})
export class CarsListComponent implements OnInit, AfterViewInit { //implementuje interfejs onInit czyli podpisuje kontrakt i muszę użyć niżej metody onInit
  @ViewChild("totalCostRef") totalCostRef : TotalCostComponent; //ViewChild pozwala na uzyskanie dostępu do metod publicznych zagnieżdżonego komponentu (z innej klasy)
  grossCost : number;
  totalCost : number;
  cars : Car[];

  constructor(private carsService: CarsService) { } //konstruktor jest inicjalizowany jeszcze przed stworzeniem komponentu
  //servisy wstrzykijemy do konstruktorów

  ngOnInit() {  //co się dzieje na starcie budowania komponentu
    this.loadCars(); //w ngOnInit najlepiej zostawić samo wywołanie metod
  }

  ngAfterViewInit() {  //inicjalizuje się kiedy zbuduje się już widok
    this.totalCostRef.showGross();
  }

  loadCars() : void {
    this.carsService.getCars().subscribe((cars) => {
      this.cars = cars;
      this.countPrice();  //tutaj wywołanie countPrice żeby wcześniej wczytała się tablica samochodów a potem policzył koszt -> zabezp. przed asynchronicznością
    })
  }

  showGross() : void {
    this.totalCostRef.showGross(); //w ten sposób wywołujemy metodę z zagnieżdżonego komponentu w komponencie rodzica
  }

  countPrice() : void {
    this.totalCost = this.cars
      .map((car) => car.cost) 
      .reduce((prev, next) => prev + next); //pod reduce idzie pętla, spłaszcza on tablicę i zwraca jedną wartość
  }

  onShownGross(grossCost : number) : void {
    this.grossCost = grossCost;  // metoda która zostanie wywoałana jeśli dane zostaną wyemitowane z komponentu dziecka do rodzica
  } // pole klasy grossCost jest równe parametrowi. jeśli funkcja onShownGross zostanie wywołana to odebrany parametr przypisz do pola grossCost 
}

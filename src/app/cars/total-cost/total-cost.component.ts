import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'cs-total-cost',
  templateUrl: './total-cost.component.html',
  styleUrls: ['./total-cost.component.less']
})
export class TotalCostComponent {

  @Input() totalCost : number; //pole w inpucie musi mieć nazwię identyczną jak pole w {{ bindingu }}}
  @Output() shownGross: EventEmitter<number> = new EventEmitter<number>();  //do pola klasy przypisujemy typ EventEmitter typu number -> new EventEmitter to nowy obiekt/instancja klasty 
  private VAT : number = 1.23;  
 //EventEmitter to nadajnik który emituje dane, w innym punkcie możemy je odebrać (rodzic komponentu - emitujemy dane z dziecka do rodzica)

 showGross() : void {
  this.shownGross.emit(this.totalCost * this.VAT); //funcja showGross emituje wartość
 }
}

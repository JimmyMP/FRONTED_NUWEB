import { EventEmitter, Injectable, Output } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private datosFuente = new BehaviorSubject<string>('');
  private datosFuente2 = new BehaviorSubject<string>('');

  datosActuales = this.datosFuente.asObservable();
  datosActuales2 = this.datosFuente2.asObservable();


  @Output() areaTrigger: EventEmitter<any> = new EventEmitter();
  constructor() { }

  enviarDatos(datos: string) {
    this.datosFuente.next(datos);
  }
  enviarDatos2(datos: string) {
    this.datosFuente2.next(datos);
  }

  


}

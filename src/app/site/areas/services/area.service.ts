import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AreaService {

  private apiUrl = 'api'; // Ruta a la API simulada
  constructor(private http: HttpClient) { }
  getAreas(): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/areas`);
  }
  getArea( area: string): Observable<any>{
    return this.http.get<any>(`${this.apiUrl}/${area}`)
  }
  
}

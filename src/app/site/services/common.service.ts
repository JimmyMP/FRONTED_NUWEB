import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/app/environments/environment.dev';

@Injectable({
  providedIn: 'root'
})
export class CommonService {
  //API_URL: string = ''
  constructor( private http: HttpClient ) { }

  getById( path: string, id: number){
    const urlPath = `${environment.API_URL}${path}/${id}`
    return this.http.get<any>(urlPath)
  }

  getAll( path: string){
    const urlPath = `${environment.API_URL}${path}`
    return this.http.get<any>(urlPath)
  }
  create( path: string, data: {}){
    console.log('🥾', 'LLEGA', data)
    const urlPath = `${environment.API_URL}${path}`
    return this.http.post<any>(urlPath, data)
  }
  update( path: string, id: number, data: {}){
    const urlPath = `${environment.API_URL}${path}/${id}`
    return this.http.put<any>(urlPath, data)
  }
  delete( path: string, id: number){
    const urlPath = `${environment.API_URL}${path}/${id}`
    return this.http.delete<any>(urlPath)
  }

}

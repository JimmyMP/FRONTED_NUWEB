import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { Testimonial } from "./testimonial/testimonial-data";
import { Member } from "./member/member-data";
@Injectable({
  providedIn: 'root'
})
export class DataService {
  private baseUrl = 'http://127.0.0.1:8000';

  constructor(private http: HttpClient) {}

  getTestimonials(): Observable<Testimonial[]> {
    return this.http.get<any>(`${this.baseUrl}/testimony/?format=json`)
      .pipe(
        map(response => response.testimony)
      );
  }

  getMembersByArea(area: string): Observable<Member[]> {
    console.log('Llamando a getMembersByArea con área:', area);
    return this.http.get<any>(`${this.baseUrl}/area/member/?format=json`)
      .pipe(
        map(response => response.data.filter((member: Member) => member.area_member === area))
      );
  }
}
import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { Observable, forkJoin } from 'rxjs';
import { map } from 'rxjs/operators';

import { Testimonial } from "./testimonial/testimonial-data";
import { Member } from "./member/member-data";
import { Event,Sponsor} from "./event/event-data";
import { CombinedMeeting, Meeting, MeetingImage } from "./meeting/meeting-data";
@Injectable({
  providedIn: 'root'
})
export class DataService {
  private baseUrl = 'http://127.0.0.1:8000';

  constructor(private http: HttpClient) {}

  // getMeeting(): Observable<Meeting[]> {
  //   return this.http.get<any>(`${this.baseUrl}/area/inicio/?format=json`)
  //     .pipe(
  //       map(response => response.meeting)
  //     );
  // }
  // getMeetingImage(id_synergy: number): Observable<MeetingImage[]> {
  //   return this.http.get<any>(`${this.baseUrl}/area/inicio-image/?format=json`)
  //     .pipe(
  //       map(response => {
  //         return response.data.filter((meetingImage: MeetingImage) => meetingImage.id_synergy === id_synergy);
  //       })
  //     );
  // }
  getCombinedMeetings(): Observable<CombinedMeeting[]> {
    return forkJoin([
      this.http.get<any>(`${this.baseUrl}/area/inicio/?format=json`),
      this.http.get<any>(`${this.baseUrl}/area/inicio-image/?format=json`)
    ]).pipe(
      map(responses => {
        const meetings = responses[0].data;
        const meetingImages = responses[1].data;
  
        // Crear un array para almacenar todas las reuniones combinadas con sus imágenes
        const combinedMeetings: CombinedMeeting[] = [];
  
        // Combinar cada reunión con su imagen correspondiente
        meetings.forEach((meeting: any) => {
          const matchingImage = meetingImages.find((image: any) => image.id_synergy === meeting.id);
          const combinedMeeting = new CombinedMeeting();
          combinedMeeting.id = meeting.id;
          combinedMeeting.area = meeting.area;
          combinedMeeting.meeting = meeting.meeting;
          combinedMeeting.integration = meeting.integration;
          combinedMeeting.participation = meeting.participation;
          combinedMeeting.meeting_Image = matchingImage?.metting_image || '';
          combinedMeeting.integration_Image = matchingImage?.integration_image || '';
          combinedMeeting.participation_Image = matchingImage?.participation_image || '';
          
          combinedMeetings.push(combinedMeeting);
        });
  
        return combinedMeetings;
      })
    );
  }
  

  getTestimonials(): Observable<Testimonial[]> {
    return this.http.get<any>(`${this.baseUrl}/testimony/?format=json`)
      .pipe(
        map(response => response.testimony)
      );
  }

  getMembersByArea(area: string): Observable<Member[]> {
    return this.http.get<any>(`${this.baseUrl}/area/member/?format=json`)
      .pipe(
        map(response => {
            const members: Member[] = response.data.filter((member: Member) => member.area_member === area);
            // Asignar un ID único a cada miembro
            members.forEach((member, index) => {
                member.id = index + 1; // Se puede ajustar según sea necesario
            });
            return members;
        })
      );
  }

  getSponsor(): Observable<Sponsor[]> {
    return this.http.get<any>(`${this.baseUrl}/activity/patrocinadores/?format=json`)
      .pipe(
        map(response => response.data)
      );
  }
  
  getEvents(): Observable<Event[]> {
    return this.http.get<any>(`${this.baseUrl}/activity/eventos/?format=json`)
      .pipe(
        map(response => response.data.filter((event: Event) => event.is_event === true))
      );
  }

  getProjects(): Observable<Event[]> {
    return this.http.get<any>(`${this.baseUrl}/activity/eventos/?format=json`)
      .pipe(
        map(response => response.data.filter((event: Event) => event.is_event === false))
      );
  }

  getEventsByArea(area: string): Observable<Event[]> {
    return this.http.get<any>(`${this.baseUrl}/activity/eventos/?format=json`)
      .pipe(
        map(response => response.data.filter((event: Event) => event.project_area.includes(area)))
      );
  }
}
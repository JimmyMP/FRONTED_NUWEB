import { Component, OnInit} from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from 'src/app/models/data-service';// Reemplaza 'tu-ruta-del-servicio' con la ruta correcta de tu servicio
import { Event } from 'src/app/models/event/event-data';

@Component({
  selector: 'app-activities',
  templateUrl: './activities.component.html',
  styleUrls: ['./activities.component.scss']
})
export class ActivitiesComponent implements OnInit {
  areaUrl = ''
  events: Event[] = [];
  constructor(private router: Router, private dataService: DataService){}

  ngOnInit() {
    console.log('ngOnInit member ejecutado');
    this.areaUrl = this.router.url.split('/')[2];
    this.getEvents();
  }
  getEvents(): void {
    this.dataService
      .getEventsByArea(this.areaUrl) // Ajusta según cómo obtienes el área desde la URL
      .subscribe(events => {
        this.events = events;
        console.log(this.events);
      });
  }
}
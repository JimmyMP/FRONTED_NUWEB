import { Component, OnInit} from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from 'src/app/models/data-service';// Reemplaza 'tu-ruta-del-servicio' con la ruta correcta de tu servicio
import { Event } from 'src/app/models/event/event-data';
@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.scss']
})
export class EventsComponent implements OnInit {
  events: Event[] = [];
  constructor(private router: Router, private dataService: DataService){}

  ngOnInit() {
    this.getEvents();
  }
  getEvents(): void {
    this.dataService
      .getEvents() // Ajusta según cómo obtienes el área desde la URL
      .subscribe(events => {
        this.events = events;
        console.log(this.events);
      });
  }
}

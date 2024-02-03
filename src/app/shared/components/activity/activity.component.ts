import { Component, Input, OnInit} from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from 'src/app/models/data-service';// Reemplaza 'tu-ruta-del-servicio' con la ruta correcta de tu servicio
import { Event } from 'src/app/models/event/event-data';  
@Component({
  selector: 'app-activity',
  templateUrl: './activity.component.html',
  styleUrls: ['./activity.component.scss']
})
export class ActivityComponent  {

  @Input()
  event!: Event;
  constructor(){}
}

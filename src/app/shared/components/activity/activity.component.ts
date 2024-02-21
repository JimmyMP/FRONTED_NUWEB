import { Component, Input, OnInit } from '@angular/core';
import { DataService } from 'src/app/models/data-service';
import { Event } from 'src/app/models/event/event-data';

@Component({
  selector: 'app-activity',
  templateUrl: './activity.component.html',
  styleUrls: ['./activity.component.scss']
})
export class ActivityComponent implements OnInit {

  @Input() event!: Event;
  sponsors: any[] = [];

  constructor(private dataService: DataService) {}

  ngOnInit(): void {
    // Llama a la función getSponsorNombre cuando se inicializa el componente para cargar los sponsors
    this.event.sponsors.forEach(sponsor => {
      this.getSponsorNombre(sponsor);
    });
  }

  getSponsorNombre(nombre: string | null) {
    if (nombre) {
      this.dataService.getSponsor().subscribe((data: any) => {
        // Filtrar los datos para encontrar el patrocinador con el nombre coincidente
        const sponsorCoincidente = data.find((sponsor: any) => sponsor.name === nombre);
        if (sponsorCoincidente) {
          // Agregar el sponsor a la lista de sponsors
          this.sponsors.push(sponsorCoincidente);
        }
      });
    }
  }
}

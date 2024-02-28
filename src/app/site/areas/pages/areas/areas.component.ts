import { Component, OnInit } from '@angular/core';
import { CombinedMeeting } from 'src/app/models/meeting/meeting-data';
import { DataService } from 'src/app/models/data-service';
@Component({
  selector: 'app-areas',
  templateUrl: './areas.component.html',
  styleUrls: ['./areas.component.scss']
})
export class AreasComponent implements OnInit{
  combinedmeetings:CombinedMeeting[]=[];
  areas = [
    { id: 1, name: 'PMO', routerLink: 'pmo', imageSrc: './assets/images/sistemas.jpg' },
    { id: 2, name: 'SISTEMAS', routerLink: 'sistemas', imageSrc: './assets/images/sistemas.jpg' },
    { id: 3, name: 'INDUSTRIAL', routerLink: 'industrial', imageSrc: './assets/images/sistemas.jpg' },
    { id: 4, name: 'INVESTIGACIÓN', routerLink: 'investigacion', imageSrc: './assets/images/sistemas.jpg' },
    { id: 5, name: 'MARKETING', routerLink: 'marketing', imageSrc: './assets/images/sistemas.jpg' },
    { id: 6, name: 'GTH', routerLink: 'gth', imageSrc: './assets/images/sistemas.jpg' },
    { id: 7, name: 'RRPP', routerLink: 'rrpp', imageSrc: './assets/images/sistemas.jpg' },
    { id: 8, name: 'LOGISTICA', routerLink: 'logistica', imageSrc: './assets/images/sistemas.jpg' }
  ];
  constructor(private dataService: DataService){}
  ngOnInit() {
    this.getCombinedMeetings();
  }
  getCombinedMeetings(): void {
    this.dataService
      .getCombinedMeetings() // Ajusta según cómo obtienes el área desde la URL
      .subscribe(combinedmeetings=> {
        this.combinedmeetings = combinedmeetings;
        console.log(combinedmeetings);
      });
  }
}

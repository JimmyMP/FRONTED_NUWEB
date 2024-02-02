import { Component, Input, OnInit } from '@angular/core';
import { Member } from 'src/app/models/member/member-data';
import { DataService } from 'src/app/models/data-service';
@Component({
  selector: 'app-pmo',
  templateUrl: './pmo.component.html',
  styleUrls: ['./pmo.component.scss']
})
export class PmoComponent  {
  // members: Member[] = [];
  // constructor(private dataService: DataService) {}

  // ngOnInit() {
  //   // Filtrar miembros por área "PMO" al iniciar el componente
  //   this.filterMembersByArea('PMO');
    
  // }

  // filterMembersByArea(area: string): void {
  //   // Suponiendo que ya tienes la lista completa de miembros
  //   console.log('Iniciando filtro por área...');
  //   this.dataService
  //     .getMembers()
  //     .subscribe(members => {
  //       this.members = members;
  //       console.log(this.members, "HOLA");
  //       this.members = this.members.filter(member => member.area_name === area);
  //     });
  //   console.log('Miembros filtrados por área:', this.members);
  // }
}

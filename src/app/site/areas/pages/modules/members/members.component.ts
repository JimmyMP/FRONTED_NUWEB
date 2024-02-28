import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from 'src/app/models/data-service';
import { Member } from 'src/app/models/member/member-data';

@Component({
  selector: 'app-members',
  templateUrl: './members.component.html',
  styleUrls: ['./members.component.scss']
})
export class MembersComponent implements OnInit {
  areaUrl = ''
  members: Member[]=[];
  constructor(private router: Router,private dataService: DataService) {}
  ngOnInit() {
    this.areaUrl = this.router.url.split('/')[2];
    this.getMembers();
  }
  getMembers(): void {
    this.dataService
      .getMembersByArea(this.areaUrl) // Ajusta según cómo obtienes el área desde la URL
      .subscribe(members => {
        this.members = members;
        console.log(this.members);
      });
  }
}


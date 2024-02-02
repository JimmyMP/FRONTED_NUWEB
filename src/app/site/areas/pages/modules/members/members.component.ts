import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CommonService } from 'src/app/site/services/common.service';
import { DataService } from 'src/app/models/data-service';
@Component({
  selector: 'app-members',
  templateUrl: './members.component.html',
  styleUrls: ['./members.component.scss']
})
export class MembersComponent {
  areaUrl = ''

  members: any;

  constructor(private router: Router, private commonService: CommonService, private dataService: DataService) {}

  ngOnInit(): void {
    console.log('ngOnInit members ejecutado');
    this.areaUrl = this.router.url.split('/')[2];
    this.getMembers();
  }

  private getMembers(): void {
    this.dataService
      .getMembersByArea(this.areaUrl)
      .subscribe(members => {
        this.members = members;
      });
  }

  delete(){

  }

  onSubmit(){
    
  }

}


import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CommonService } from 'src/app/site/services/common.service';

@Component({
  selector: 'app-members',
  templateUrl: './members.component.html',
  styleUrls: ['./members.component.scss']
})
export class MembersComponent {
  areaUrl = ''

  members: any;

  constructor(private router: Router, private commoService: CommonService) {}

  ngOnInit(): void {
    this.areaUrl = this.router.url.split('/')[2];
  }

  getMembers(){
    this.commoService.getAll('api/v1/members/sistemas').subscribe({
      next: res => {
        this.members = res.result
        console.log(this.members)
      }
    })
  }

  delete(){

  }

  onSubmit(){
    
  }

}


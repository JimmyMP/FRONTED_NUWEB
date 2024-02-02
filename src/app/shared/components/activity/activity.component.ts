import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { ActivityData } from 'src/app/models/activity-data.model';

@Component({
  selector: 'app-activity',
  templateUrl: './activity.component.html',
  styleUrls: ['./activity.component.scss']
})
export class ActivityComponent {
  activityData?: ActivityData;

  @Input() set activity (activity: ActivityData){
    this.activityData = activity
  }


  constructor(private router: Router){

  }
  
}

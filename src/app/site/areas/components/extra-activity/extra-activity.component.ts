import { Component,Input } from '@angular/core';
import { Meeting, MeetingImage } from 'src/app/models/meeting/meeting-data';

@Component({
  selector: 'app-extra-activity',
  templateUrl: './extra-activity.component.html',
  styleUrls: ['./extra-activity.component.scss']
})
export class ExtraActivityComponent {
  @Input() meeting!: Meeting;
  @Input() meetingImage!: MeetingImage;
}

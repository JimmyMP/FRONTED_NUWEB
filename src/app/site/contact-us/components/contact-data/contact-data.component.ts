import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-contact-data',
  templateUrl: './contact-data.component.html',
  styleUrls: ['./contact-data.component.scss']
})
export class ContactDataComponent {
  @Input() data?: {location: string, classroom: string, phone: string, email: string} 
}

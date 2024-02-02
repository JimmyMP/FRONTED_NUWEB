import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Contact } from 'src/app/interfaces/contact';

const contactData = { location: 'Av. Túpac Amaru 280, Lima 15333 ', classroom: 'FIIS, S4-106', phone: '950 217 878', email: 'ccnucleo.fiis@uni.edu.pe'}

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.scss']
})
export class ContactUsComponent {
  nucleoData = contactData

  onSubmit(){

  }
  
}

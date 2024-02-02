import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContactacUsRoutingModule } from './contact-us-routing.module';
import { ContactUsComponent } from './pages/contact-us/contact-us.component';
import { ContactFormComponent } from './components/contact-form/contact-form.component';
import { ContactDataComponent } from './components/contact-data/contact-data.component';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    ContactUsComponent,
    ContactFormComponent,
    ContactDataComponent
  ],
  imports: [
    CommonModule,
    ContactacUsRoutingModule,
    ReactiveFormsModule,
    FormsModule,
  ]
})
export class ContactUsModule { }

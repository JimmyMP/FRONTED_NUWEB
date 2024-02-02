import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TestimonialsRoutingModule } from './testimonials-routing.module';
import { TestimonialsComponent } from './pages/testimonials/testimonials.component';
import { TestimonialsListComponent } from './components/testimonials-list/testimonials-list.component';
import { TestimonialComponent } from './components/testimonial/testimonial.component';


@NgModule({
  declarations: [
    TestimonialsComponent,
    TestimonialsListComponent,
    TestimonialComponent
  ],
  imports: [
    CommonModule,
    TestimonialsRoutingModule
  ]
})
export class TestimonialsModule { }

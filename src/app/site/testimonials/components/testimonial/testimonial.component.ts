import { Component, OnInit } from '@angular/core';

import { DataService } from 'src/app/models/data-service';
import { Testimonial } from 'src/app/models/testimonial/testimonial-data';

@Component({
  selector: 'app-testimonial',
  templateUrl: './testimonial.component.html',
  styleUrls: ['./testimonial.component.scss']
})
export class TestimonialComponent implements OnInit {

  testimonials: Testimonial[] = []; // Valor inicial, una matriz vacía

  constructor(private dataService: DataService) {}

  ngOnInit() {
    this.getTestimonials();
  }

  getTestimonials(): void {
    this.dataService
      .getTestimonials()
      .subscribe(testimonials => {
        this.testimonials = testimonials;
        console.log(this.testimonials);
      });
  }
}

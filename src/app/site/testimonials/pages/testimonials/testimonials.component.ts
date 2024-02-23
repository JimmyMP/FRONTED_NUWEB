import { Component, OnInit} from '@angular/core';
import { DataService } from 'src/app/models/data-service';
import { Testimonial } from 'src/app/models/testimonial/testimonial-data';
@Component({
  selector: 'app-testimonials',
  templateUrl: './testimonials.component.html',
  styleUrls: ['./testimonials.component.scss']
})
export class TestimonialsComponent implements OnInit {
  testimonials: Testimonial[]=[];
  constructor(private dataService: DataService){}
  ngOnInit() {
    this.getTestimonials();
  }
  getTestimonials(): void {
    this.dataService
      .getTestimonials() // Ajusta según cómo obtienes el área desde la URL
      .subscribe(testimonials => {
        this.testimonials = testimonials;
      });
  }

}

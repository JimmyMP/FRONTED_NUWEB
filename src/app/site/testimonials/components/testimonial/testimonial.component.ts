import { Component, Input } from '@angular/core';

import { DataService } from 'src/app/models/data-service';
import { Testimonial } from 'src/app/models/testimonial/testimonial-data';

@Component({
  selector: 'app-testimonial',
  templateUrl: './testimonial.component.html',
  styleUrls: ['./testimonial.component.scss']
})
export class TestimonialComponent{
  @Input()testimonial!: Testimonial; // Valor inicial, una matriz vacía

  constructor(private dataService: DataService) {}

}

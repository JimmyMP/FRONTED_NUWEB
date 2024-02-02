import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-strategies',
  templateUrl: './strategies.component.html',
  styleUrls: ['./strategies.component.scss']
})
export class StrategiesComponent {
  areaUrl: string = ''
  constructor(private router: Router) {}

  ngOnInit(): void {
    this.areaUrl = this.router.url.split('/')[2];
  }
}

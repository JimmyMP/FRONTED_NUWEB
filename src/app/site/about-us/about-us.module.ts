import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { AboutUsRoutingModule } from './about-us-routing.module';
import { AboutUsComponent } from './pages/about-us/about-us.component';
import { TimelineComponent } from './components/timeline/timeline.component';


@NgModule({
  declarations: [
    AboutUsComponent,
    TimelineComponent
  ],
  imports: [
    CommonModule,
    AboutUsRoutingModule,
  ]
})
export class AboutUsModule { }

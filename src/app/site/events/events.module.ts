import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EventsRoutingModule } from './events-routing.module';
import { EventsComponent } from './pages/events/events.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { ActivityModule } from 'src/app/shared/components/activity/activity.module';


@NgModule({
  declarations: [
    EventsComponent,
  ],
  imports: [
    CommonModule,
    EventsRoutingModule,
    SharedModule,
    ActivityModule,
  ]
})
export class EventsModule { }

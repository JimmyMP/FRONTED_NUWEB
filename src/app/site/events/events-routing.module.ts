import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EventsComponent } from './pages/events/events.component';
import { ActivityDetailsComponent } from 'src/app/shared/pages/activity-details/activity-details.component';

const routes: Routes = [
  {
    path: '', component: EventsComponent
  },
  { path: 'activity', component: ActivityDetailsComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EventsRoutingModule { }

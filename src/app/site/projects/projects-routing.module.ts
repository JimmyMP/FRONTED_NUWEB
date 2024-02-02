import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProjectsComponent } from './pages/projects/projects.component';
import { ActivityDetailsComponent } from 'src/app/shared/pages/activity-details/activity-details.component';

const routes: Routes = [
  {
    path: '', component: ProjectsComponent
  },
  { path: 'activity/:id', component: ActivityDetailsComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProjectsRoutingModule { }

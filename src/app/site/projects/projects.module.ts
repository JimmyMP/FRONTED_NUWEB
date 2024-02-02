import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProjectsRoutingModule } from './projects-routing.module';
import { ProjectsComponent } from './pages/projects/projects.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { ActivityModule } from 'src/app/shared/components/activity/activity.module';


@NgModule({
  declarations: [
    ProjectsComponent
  ],
  imports: [
    CommonModule,
    ProjectsRoutingModule,
    SharedModule,
    ActivityModule,
  ]
})
export class ProjectsModule { }

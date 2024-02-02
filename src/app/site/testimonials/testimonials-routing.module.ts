import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TestimonialsComponent } from './pages/testimonials/testimonials.component';
import { PageNotFoundComponent } from 'src/app/pages/page-not-found/page-not-found.component';

const routes: Routes = [
  {
    path: '',
    children: [
      { path: '', component: TestimonialsComponent},
      { path: '**', component: PageNotFoundComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TestimonialsRoutingModule { }

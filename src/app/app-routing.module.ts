import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './pages/home/home.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';



const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full'},
  { path: 'home', component: HomeComponent},
  { 
    path: 'contactanos',
    loadChildren: () => import('./site/contact-us/contact-us.module').then(m => m.ContactUsModule)},
  { 
    path: 'sobre-nosotros',
    loadChildren: () => import('./site/about-us/about-us.module').then(m => m.AboutUsModule)},
  {
    path: 'testimonios', 
    loadChildren: () => import('./site/testimonials/testimonials.module').then(m => m.TestimonialsModule)
  },
  {
    path: 'areas',
    loadChildren: () => import('./site/areas/areas.module').then(m => m.AreasModule)
  },
  {
    path: 'eventos',
    loadChildren: () => import('./site/events/events.module').then(m => m.EventsModule)
  },
  {
    path: 'proyectos',
    loadChildren: () => import('./site/projects/projects.module').then(m => m.ProjectsModule)
  },
  {path: '**', component: PageNotFoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
  
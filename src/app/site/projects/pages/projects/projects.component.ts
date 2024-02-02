import { Component } from '@angular/core';
import { ActivityData } from 'src/app/models/activity-data.model';
import { CommonService } from 'src/app/site/services/common.service';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent {
  // fecha = new Date ('2023-11-24')
  // opcionesDeFormato: any = {
  //   year: 'numeric',
  //   month: '2-digit',
  //   day: '2-digit',
  //   timeZone: 'America/Lima' // Zona horaria de Lima, Perú
  // };
  // fechaLocal = this.fecha.toLocaleString('es-PE', this.opcionesDeFormato);
  projects: ActivityData[] = [
    // {
    //   imageUrl: './assets/images/activity.jpg',
    //   title: 'Titulito',
    //   Coach: 'Jhan Antezana',
    //   date: new Date(2023, 10, 24),
    //   status: 'Activo'
    // },
    // {
    //   imageUrl: './assets/images/activity.jpg',
    //   title: 'Titulito',
    //   Coach: 'Jhan Antezana',
    //   date: new Date(2023, 10, 24),
    //   status: 'Activo'
    // },
    // {
    //   imageUrl: './assets/images/activity.jpg',
    //   title: 'Titulito',
    //   Coach: 'Jhan Antezana',
    //   date: new Date(2023, 10, 24),
    //   status: 'Activo'
    // },
    // {
    //   imageUrl: './assets/images/activity.jpg',
    //   title: 'Titulito',
    //   Coach: 'Jhan Antezana',
    //   date: new Date(2023, 10, 24),
    //   status: 'Activo'
    // },
    // {
    //   imageUrl: './assets/images/activity.jpg',
    //   title: 'Titulito',
    //   Coach: 'Jhan Antezana',
    //   date: new Date(2023, 10, 24),
    //   status: 'Activo'
    // },
  ]
  // project: ActivityData = {
  //   imageUrl: './assets/images/activity.jpg',
  //   title: 'Titulito',
  //   Coach: 'Jhan Antezana',
  //   date: new Date(2023, 10, 24),
  //   status: 'Activo'
  // };
  // date: new Date ('2023-11-24'),
  projectsPath: string = '/activity/activities/'
  constructor(private commonService: CommonService){
    this.getProjects()
  }
  getProjects(){
    this.commonService.getAll(this.projectsPath).subscribe({
      next: res => {
        let project: ActivityData

        res.data.forEach( (element: any) => {
          project = {
            Coach : "Jhan",
            date : new Date(element.start_date),
            imageUrl : 'https://plushlamour.com.ar/wp-content/uploads/2021/04/Imagen-personal-768x512.jpg',
            status : "Activo",
            title : element.name,
          }
          this.projects.push(project)
        });
      }
    })
  }
}

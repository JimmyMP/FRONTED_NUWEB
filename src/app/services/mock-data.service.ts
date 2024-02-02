import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';@Injectable({
  providedIn: 'root'
})
export class MockDataService implements InMemoryDbService {
  createDb() {
    const areas = [
      {
        area: 'Sistemas'.toUpperCase(),
        organigrama: "./assets/images/organigrama.png",
        miembros: [
          {
            'Nombre': 'Miembro1',
            'email': 'emali.com'
          },
          {
            'Nombre': 'Miembro2',
            'email': 'emali.com'
          },
          {
            'Nombre': 'Miembro3',
            'email': 'emali.com'
          },
          {
            'Nombre': 'Miembro4',
            'email': 'emali.com'
          }
        ],
        estrategis: {
          objetivos: [
            'Objetivo1',
            'Objetivo2',
            'Objetivo3',
          ],
          miion: 'Mision del area de sistemas',
          vision: 'Vision del area de sistema'
        },
        proyectos: [
          {
            nombre: 'Proyecto 1',
            fecha: '25-12-2023'
          }
        ]
      },
      {
        area: 'Industrial'.toUpperCase(),
        organigrama: "./assets/images/oval-organigrama.png",
        miembros: [
          {
            'Nombre': 'Miembro1',
            'email': 'emali.com'
          },
          {
            'Nombre': 'Miembro2',
            'email': 'emali.com'
          },
          {
            'Nombre': 'Miembro3',
            'email': 'emali.com'
          },
          {
            'Nombre': 'Miembro4',
            'email': 'emali.com'
          }
        ],
        estrategis: {
          objetivos: [
            'Objetivo1',
            'Objetivo2',
            'Objetivo3',
          ],
          miion: 'Mision del area de industril',
          vision: 'Vision del area de industial'
        },
        proyectos: [
          {
            nombre: 'Proyecto 1',
            fecha: '25-12-2023'
          }
        ]
      },
      {
        area: 'pmo'.toUpperCase(),
        organigrama: "./assets/images/sky-organigrama.png",
        miembros: [
          {
            'Nombre': 'Miembro1',
            'email': 'emali.com'
          },
          {
            'Nombre': 'Miembro2',
            'email': 'emali.com'
          },
          {
            'Nombre': 'Miembro3',
            'email': 'emali.com'
          },
          {
            'Nombre': 'Miembro4',
            'email': 'emali.com'
          }
        ],
        estrategis: {
          objetivos: [
            'Objetivo1',
            'Objetivo2',
            'Objetivo3',
          ],
          miion: 'Mision del area de pmo',
          vision: 'Vision del area de pmo'
        },
        proyectos: [
          {
            nombre: 'Proyecto 1',
            fecha: '25-12-2023'
          }
        ]
      }
    ];
    const sistemas = {
      area: 'Sistemas'.toUpperCase(),
      organigrama: "./assets/images/organigrama.png",
      miembros: [
        {
          'Nombre': 'Miembro1',
          'email': 'emali.com'
        },
        {
          'Nombre': 'Miembro2',
          'email': 'emali.com'
        },
        {
          'Nombre': 'Miembro3',
          'email': 'emali.com'
        },
        {
          'Nombre': 'Miembro4',
          'email': 'emali.com'
        }
      ],
      estrategis: {
        objetivos: [
          'Objetivo1',
          'Objetivo2',
          'Objetivo3',
        ],
        miion: 'Mision del area de sistemas',
        vision: 'Vision del area de sistema'
      },
      proyectos: [
        {
          nombre: 'Proyecto 1',
          fecha: '25-12-2023'
        }
      ]
    };
    const industrial = {
      area: 'Industrial'.toUpperCase(),
      organigrama: "./assets/images/oval-organigrama.png",
      miembros: [
        {
          'Nombre': 'Miembro1',
          'email': 'emali.com'
        },
        {
          'Nombre': 'Miembro2',
          'email': 'emali.com'
        },
        {
          'Nombre': 'Miembro3',
          'email': 'emali.com'
        },
        {
          'Nombre': 'Miembro4',
          'email': 'emali.com'
        }
      ],
      estrategis: {
        objetivos: [
          'Objetivo1',
          'Objetivo2',
          'Objetivo3',
        ],
        miion: 'Mision del area de industril',
        vision: 'Vision del area de industial'
      },
      proyectos: [
        {
          nombre: 'Proyecto 1',
          fecha: '25-12-2023'
        }
      ]
    };    const pmo = {
      area: 'pmo'.toUpperCase(),
      organigrama: "./assets/images/sky-organigrama.png",
      miembros: [
        {
          'Nombre': 'Miembro1',
          'email': 'emali.com'
        },
        {
          'Nombre': 'Miembro2',
          'email': 'emali.com'
        },
        {
          'Nombre': 'Miembro3',
          'email': 'emali.com'
        },
        {
          'Nombre': 'Miembro4',
          'email': 'emali.com'
        }
      ],
      estrategis: {
        objetivos: [
          'Objetivo1',
          'Objetivo2',
          'Objetivo3',
        ],
        miion: 'Mision del area de pmo',
        vision: 'Vision del area de pmo'
      },
      proyectos: [
        {
          nombre: 'Proyecto 1',
          fecha: '25-12-2023'
        }
      ]
    };
    const users: any[] = [
      { id: 1, name: 'Jhan', email: 'jhan@gmail.com'},
      { id: 2, name: 'Pepelucho', email: 'pepelucho@gmail.com'},
      { id: 3, name: 'Juanita', email: 'juanita@gmail.com'},
    ];    return { areas, users, sistemas, industrial, pmo};
  }
  constructor() { }}

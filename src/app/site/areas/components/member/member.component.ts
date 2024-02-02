import { Component, ElementRef, Renderer2, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from 'src/app/models/data-service';// Reemplaza 'tu-ruta-del-servicio' con la ruta correcta de tu servicio
import { Member } from 'src/app/models/member/member-data'; // Reemplaza 'tu-ruta-del-modelo' con la ruta correcta de tu modelo

@Component({
  selector: 'app-member',
  templateUrl: './member.component.html',
  styleUrls: ['./member.component.scss']
})
export class MemberComponent implements OnInit {

  // isContactInfoVisible = false;
  // originalMainContent: Node | null = null; // Almacena el contenido original del main
  areaUrl = ''
  members: Member[] = [];
  constructor(private router: Router,private renderer: Renderer2, private el: ElementRef, private dataService: DataService) { }

  ngOnInit() {
    console.log('ngOnInit member ejecutado');
    this.areaUrl = this.router.url.split('/')[2];
    this.getMembers();
  }

  getMembers(): void {
    this.dataService
      .getMembersByArea(this.areaUrl) // Ajusta según cómo obtienes el área desde la URL
      .subscribe(members => {
        this.members = members;
        console.log(this.members);
      });
  }
  // ngAfterViewInit() {
  //   const mainSection = this.el.nativeElement.querySelector('main > div');
  //   const modal = this.el.nativeElement.querySelector('#myModal');
  //   const modalContent = modal.querySelector('.modal-content .image-container');
  //   const closeModalButton = modal.querySelector('.modal_close');

  //   this.originalMainContent = mainSection.cloneNode(true); // Guarda el contenido original

  //   this.renderer.listen(mainSection, 'click', () => {
  //     modalContent.innerHTML = ''; // Vaciar contenido anterior de modalContent
  //     while (mainSection.firstChild) {
  //       modalContent.appendChild(mainSection.firstChild);
  //     }
  //     this.renderer.setStyle(modal, 'display', 'block');
  //   });

  //   this.renderer.listen(closeModalButton, 'click', () => {
  //     this.renderer.setStyle(modal, 'display', 'none');
  //     if (this.originalMainContent) {
  //       mainSection.innerHTML = ''; // Vaciar el main original
  //       while (this.originalMainContent.firstChild) {
  //         mainSection.appendChild(this.originalMainContent.firstChild); // Restaurar el contenido original
  //       }
  //     }
  //   });

  //   this.renderer.listen('document', 'click', (event: Event) => {
  //     if (!modal.contains(event.target)) {
  //       this.renderer.setStyle(modal, 'display', 'none');
  //     }
  //   });
  // }

  // toggleContactInfo() {
  //   this.isContactInfoVisible = !this.isContactInfoVisible;
  // }
}

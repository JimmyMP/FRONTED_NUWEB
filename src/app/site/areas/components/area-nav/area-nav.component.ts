import { Component } from '@angular/core';

@Component({
  selector: 'app-area-nav',
  templateUrl: './area-nav.component.html',
  styleUrls: ['./area-nav.component.scss']
})
export class AreaNavComponent {
  isNavTextVisible = false
  toggleNavText(){
    this.isNavTextVisible = !this.isNavTextVisible
  }
}

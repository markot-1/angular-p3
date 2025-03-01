import { Component } from '@angular/core';
import { MatIcon } from '@angular/material/icon';

@Component({
  selector: 'app-side-nav',
  imports: [MatIcon],
  templateUrl: './side-nav.component.html',
  styleUrl: './side-nav.component.scss'
})
export class SideNavComponent {
  isSlideOut = true;

  toggleSlideOut():void {
    this.isSlideOut = !this.isSlideOut;
  }
}

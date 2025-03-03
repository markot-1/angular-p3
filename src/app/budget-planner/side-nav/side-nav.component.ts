import { Component } from '@angular/core';
import { MatIcon } from '@angular/material/icon';
import { Router } from '@angular/router';

@Component({
  selector: 'app-side-nav',
  imports: [MatIcon],
  templateUrl: './side-nav.component.html',
  styleUrl: './side-nav.component.scss'
})
export class SideNavComponent {

  constructor(private router: Router) {}

  isSlideOut = true;

  toggleSlideOut():void {
    this.isSlideOut = !this.isSlideOut;
  }

  onDashboard(){
    this.router.navigate(['/budget-planner/dashboard']);
  }

  onLogout(){
    this.router.navigate(['/budget-planner/login']);
  }
}

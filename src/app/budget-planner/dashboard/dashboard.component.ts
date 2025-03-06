import { Component } from '@angular/core';
import { SideNavComponent } from '../side-nav/side-nav.component';
import { MatIcon } from '@angular/material/icon';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  imports: [SideNavComponent, MatIcon],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent {
  lastMonthsIncome = ['January: $1000', 'February: $1500', 'March: $1200'];
  currentMonthIncome = '$2000';
  lastMonthsExpense = ['January: $800', 'February: $1000', 'March: $1200'];
  currentMonthExpense = '$1500';

  constructor(private router: Router) {}

  onIncome() {
    this.router.navigate(['/budget-planner/income']);
  }

  onExpense() {
    this.router.navigate(['/budget-planner/expense']);
  }
}

import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
import { MatButtonModule } from '@angular/material/button';

@Component({
    selector: 'app-login',
    standalone: true,
    imports: [ReactiveFormsModule, CommonModule, MatButtonModule, MatSnackBarModule],
    templateUrl: './login.component.html',
    styleUrl: './login.component.scss'
})
export class LoginComponent {
  loginForm: any;
  registerForm: any;
  activeForm: 'login' | 'register' = 'login';

  constructor(private fb: FormBuilder, 
    private router: Router,
    private snackBar: MatSnackBar) {}

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    })

    this.registerForm = this.fb.group({
      username: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]]
    })
  }

  toggleForm(form: 'login' | 'register'):void {
    this.activeForm = form;
  }

  login() {
    if(this.loginForm.valid) {
      this.router.navigate(['/budget-planner/side-nav']);
    } else {
      this.snackBar.open('Invalid email or password', 'Close', {duration: 3000});
    }
  }

  register() {
    if(this.registerForm.valid) {
      setTimeout(() => {
        window.location.reload();
      }, 2000);
      this.router.navigate(['/budget-planner/login']);
    } else {
      this.snackBar.open('Please, fill in all fields correctly!', 'Close', {duration: 3000});
    }
  }
}

import { Component, ViewChild } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';

import { LoginService } from 'src/app/services/login.service';
import { SideNavComponent } from 'src/app/side-nav/side-nav.component';
import { ILoginRequest } from 'src/interfaces';

@Component({
  selector: 'app-login-layout',
  templateUrl: './login-layout.component.html',
  styleUrls: ['./login-layout.component.css'],
})
export class LoginLayoutComponent {
  @ViewChild(SideNavComponent) sideNavComponent!: SideNavComponent;

  constructor(
    private formBuilder: FormBuilder,
    private loginService: LoginService,
    public snackBar: MatSnackBar,
    private router: Router
  ) {
    this.loginService.isLoggedIn$.subscribe((isLoggedIn: boolean) => {
      if (isLoggedIn) {
        this.router.navigate(['']);
      }
    });
  }

  emailFormControl = new FormControl('', [
    Validators.required,
    Validators.email,
  ]);
  passwordFormControl = new FormControl('', [Validators.required]);

  loginForm = this.formBuilder.group({
    email: this.emailFormControl,
    password: this.passwordFormControl,
  });

  onSubmit = () => {
    if (this.loginForm.valid) {
      this.loginService.login(this.loginForm.value as ILoginRequest).subscribe({
        next: (res) => {
          this.snackBar.open('You are logged in!', undefined, {
            duration: 3000,
          });
          localStorage.setItem('token_user', res.accessToken);
          this.loginService.changeLoggedInSubject(true);
          this.router.navigate(['']);
        },
        error: (error) => {
          this.snackBar.open(error, undefined, {
            duration: 3000,
          });
        },
      });
    } else {
      this.snackBar.open('Please enter a valid email and password', undefined, {
        duration: 3000,
      });
    }
  };
}

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
  submitted = false;

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

  onSubmit = async () => {
    console.log(this.loginForm.value);
    try {
      if (this.loginForm.valid) {
        const response = await this.loginService.login(
          this.loginForm.value as ILoginRequest
        );

        if (response) {
          this.router.navigate(['']);
          this.snackBar.open('You are logged in!', undefined, {
            duration: 3000,
          });
        } else {
          this.snackBar.open('Wrong email or password', undefined, {
            duration: 3000,
          });
        }
      } else {
        this.snackBar.open(
          'Please enter a valid email and password',
          undefined,
          {
            duration: 3000,
          }
        );
      }
    } catch (error) {
      if (error instanceof Error) {
        this.snackBar.open(error.message, undefined, {
          duration: 3000,
        });
      }
    }
  };
}

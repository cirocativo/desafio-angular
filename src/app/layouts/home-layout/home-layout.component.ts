import { Component, ViewChild } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { AuthorizationService } from 'src/app/services/authorization.service';
import { LoginService } from 'src/app/services/login.service';
import { SideNavComponent } from 'src/app/side-nav/side-nav.component';

@Component({
  selector: 'app-home-layout',
  templateUrl: './home-layout.component.html',
  styleUrls: ['./home-layout.component.css'],
})
export class HomeLayoutComponent {
  @ViewChild(SideNavComponent) sideNavComponent!: SideNavComponent;

  constructor(
    private authorizationService: AuthorizationService,
    public snackbar: MatSnackBar,
    private loginService: LoginService
  ) {
    this.authorizationService.authGuest().subscribe({
      next: (res) => {
        console.log('guest ok', res);
        localStorage.setItem('token_guest', res.accessToken);
      },
      error: (err) => {
        console.log('guest error', err);
      },
    });
    this.loginService.testToken().subscribe({
      next: (res) => {
        this.loginService.changeLoggedInSubject(true);
      },
      error: (err) => {
        this.loginService.changeLoggedInSubject(false);
      },
    });
  }
}

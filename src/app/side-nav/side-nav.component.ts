import { Component, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { LoginService } from '../services/login.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.css'],
})
export class SideNavComponent {
  @ViewChild('sidenav') sidenav!: MatSidenav;

  isLoggedIn = false;

  constructor(
    private loginService: LoginService,
    public snackBar: MatSnackBar,
    private router: Router
  ) {
    this.loginService.isLoggedIn$.subscribe((isLoggedIn) => {
      this.isLoggedIn = isLoggedIn;
    });
  }

  loginClicked() {
    if (this.isLoggedIn) {
      this.loginService.logout();

      this.snackBar.open('Logout successful!', undefined, {
        duration: 3000,
      });
    }
    this.router.navigate(['/login']);
  }

  close() {
    this.sidenav.close();
  }
}

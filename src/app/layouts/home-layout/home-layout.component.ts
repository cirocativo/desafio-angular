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
    try {
      this.authorizationService.authGuest();
      this.loginService.testToken();
    } catch (error) {
      if (error instanceof Error) {
        this.snackbar.open(error.message, undefined, {
          duration: 3000,
        });
      }
    }
  }
}

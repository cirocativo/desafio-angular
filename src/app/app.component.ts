import { Component, ViewChild } from '@angular/core';
import { SideNavComponent } from './side-nav/side-nav.component';
import { LoginService } from './services/login.service';
import { AuthUserGuard } from './guards/authUser.guard';
import { Router } from '@angular/router';
import { map } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  isLoggedIn = false;

  @ViewChild(SideNavComponent) sideNavComponent!: SideNavComponent;

  constructor(private loginService: LoginService, private router: Router) {
    this.loginService.isLoggedIn$.subscribe((isLoggedIn) => {
      this.isLoggedIn = isLoggedIn;
    });
    console.log('APP');

    this.loginService.testToken().subscribe();
  }
}

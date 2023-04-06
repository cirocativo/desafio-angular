import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
} from '@angular/router';
import { LoginService } from '../services/login.service';

@Injectable({
  providedIn: 'root',
})
export class AuthGuestGuard implements CanActivate {
  isLoggedIn = false;

  constructor(private router: Router, private loginService: LoginService) {
    this.loginService.isLoggedIn$.subscribe((isLoggedIn: boolean) => {
      this.isLoggedIn = isLoggedIn;
    });
  }
  async canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Promise<boolean> {
    const token_guest = localStorage.getItem('token_guest');
    const token_user = localStorage.getItem('token_user');

    if (this.isLoggedIn) {
      const isLoggedIn = await this.loginService.testToken();
      if (isLoggedIn) {
        return true;
      } else {
        this.loginService.logout();
      }
    } else if (token_guest) {
      return true;
    }
    this.router.navigate(['']);
    return false;
  }
}

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
  constructor(private router: Router, private loginService: LoginService) {}
  async canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Promise<boolean> {
    const token_guest = localStorage.getItem('token_guest');
    const token_user = localStorage.getItem('token_user');

    if (token_user) {
      console.log('token_user');
      const isLoggedIn = await this.loginService.testToken();
      if (isLoggedIn) {
        console.log('bom, ta logado pelo menos');
        return true;
      } else {
        console.log('vai deslogar');
        this.loginService.logout();
      }
    } else if (token_guest) {
      console.log('token_guest');
      return true;
    }
    console.log('vai pra home');
    this.router.navigate(['']);
    return false;
  }
}

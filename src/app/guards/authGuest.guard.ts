import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
} from '@angular/router';
import { LoginService } from '../services/login.service';
import { BehaviorSubject, Observable, catchError, map, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthGuestGuard implements CanActivate {
  private isAuthorizedSubject = new BehaviorSubject<boolean>(false);
  public isAuthorized$: Observable<boolean> =
    this.isAuthorizedSubject.asObservable();

  constructor(private router: Router, private loginService: LoginService) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> | boolean {
    const token_guest = localStorage.getItem('token_guest');
    const token_user = localStorage.getItem('token_user');
    if (token_user) return this.checkAuthorization();
    if (token_guest) return true;
    return false;
  }

  checkAuthorization() {
    return this.loginService.testToken().pipe(
      map((res: any) => {
        if (res.allowed) {
          console.log('está logado');

          this.loginService.changeLoggedInSubject(true);
          return true;
        } else {
          this.loginService.logout();

          return false;
        }
      }),
      catchError((error) => {
        console.log(error);

        this.loginService.changeLoggedInSubject(false);
        return of(false);
      })
    );
  }
}

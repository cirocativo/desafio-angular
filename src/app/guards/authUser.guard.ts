import { Injectable } from '@angular/core';
import {
  CanActivate,
  Router,
  // RouterStateSnapshot,
  // ActivatedRouteSnapshot,
} from '@angular/router';
import { LoginService } from '../services/login.service';
import { BehaviorSubject, Observable, catchError, map, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthUserGuard implements CanActivate {
  private isAuthorizedSubject = new BehaviorSubject<boolean>(false);
  public isAuthorized$: Observable<boolean> =
    this.isAuthorizedSubject.asObservable();

  constructor(private loginService: LoginService, private router: Router) {}

  canActivate(): // route: ActivatedRouteSnapshot,
  // state: RouterStateSnapshot
  Observable<boolean> | boolean {
    console.log('aqui no AuthUserGuard');

    const token_user = localStorage.getItem('token_user');

    if (token_user) return this.checkAuthorization();

    this.loginService.changeLoggedInSubject(false);
    this.router.navigate(['/login']);
    return false;
  }

  checkAuthorization() {
    return this.loginService.testToken().pipe(
      map((res) => {
        if (res) {
          return true;
        } else {
          this.loginService.changeLoggedInSubject(false);
          this.router.navigate(['/login']);
          return false;
        }
      }),
      catchError((error) => {
        console.log(error);

        this.loginService.changeLoggedInSubject(false);
        this.router.navigate(['/login']);
        return of(false);
      })
    );
  }
}

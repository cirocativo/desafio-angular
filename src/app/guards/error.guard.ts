import { Injectable } from '@angular/core';
import {
  CanActivate,
  Router,
  // ActivatedRouteSnapshot,
  // RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { Observable, catchError, map, of } from 'rxjs';
import { GuestService } from '../services/guest.service';
import { AuthGuestGuard } from './authGuest.guard';

@Injectable({
  providedIn: 'root',
})
export class ErrorGuard implements CanActivate {
  constructor(
    private authorizationService: GuestService,
    private router: Router,
    private authGuestGuard: AuthGuestGuard
  ) {
    console.log('errrorGuard');
  }

  canActivate(): // route: ActivatedRouteSnapshot,
  // state: RouterStateSnapshot

  | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    localStorage.removeItem('token_guest');

    return this.generateToken().pipe(
      map((tokenGuestGenerated) => {
        if (tokenGuestGenerated) {
          this.router.navigate(['']);
          return false;
        }
        return true;
      }),
      catchError((error) => {
        console.log('erro no errorGuard', error);
        return of(true);
      })
    );
  }

  generateToken(): Observable<boolean> {
    return this.authorizationService.generateGuestToken().pipe(
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      map((res: any) => {
        console.log('guest token ok', res.accessToken);
        localStorage.setItem('token_guest', res.accessToken);
        return true;
      }),
      catchError((err) => {
        console.log('error while generating guest token', err);
        return of(false);
      })
    );
  }
}

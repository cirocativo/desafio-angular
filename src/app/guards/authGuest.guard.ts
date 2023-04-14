import { Injectable } from '@angular/core';
import {
  CanActivate,
  Router,
  // RouterStateSnapshot,
  // ActivatedRouteSnapshot,
} from '@angular/router';
import { BehaviorSubject, Observable, catchError, map, of } from 'rxjs';
import { GuestService } from '../services/guest.service';

@Injectable({
  providedIn: 'root',
})
export class AuthGuestGuard implements CanActivate {
  private isAuthorizedSubject = new BehaviorSubject<boolean>(false);
  public isAuthorized$: Observable<boolean> =
    this.isAuthorizedSubject.asObservable();

  constructor(
    private authorizationService: GuestService,
    private router: Router
  ) {}

  canActivate(): // route: ActivatedRouteSnapshot,
  // state: RouterStateSnapshot
  Observable<boolean> | boolean {
    const token_guest = localStorage.getItem('token_guest');
    if (token_guest) return true;
    return this.generateToken();
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
        this.router.navigate(['/error']);
        return of(false);
      })
    );
  }
}

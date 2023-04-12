import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, catchError, map, throwError } from 'rxjs';
import { environment } from 'src/environments/environment.development';
import { ILoginRequest, ILoginResponse } from 'src/interfaces';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  private isLoggedInSubject = new BehaviorSubject<boolean>(false);
  public isLoggedIn$: Observable<boolean> =
    this.isLoggedInSubject.asObservable();

  constructor(private http: HttpClient) {}

  getIsLoggedIn(): boolean {
    return this.isLoggedInSubject.getValue();
  }

  login(user: ILoginRequest): Observable<ILoginResponse> {
    const token_guest = localStorage.getItem('token_guest');
    if (token_guest) {
      return this.http
        .post<ILoginResponse>(`${environment.api}/token/login`, user, {
          headers: {
            'Content-Type': 'application/json',
            Authorization: 'Bearer ' + token_guest,
          },
        })
        .pipe(catchError(this.handleLoginError));
    } else {
      console.log('token undefined');
      return throwError(
        () =>
          new Error('Invalid guest token. Refresh the page and try again', {
            cause: 'invalid token',
          })
      );
    }
  }

  private handleLoginError(error: HttpErrorResponse) {
    let errorMessage = 'Something bad happened; please try again later.';
    if (error.error instanceof ErrorEvent) {
      errorMessage = `An error occurred: ${error.error.message}`;
    } else if (
      error.status === 403 &&
      error.error.message.includes('Token not recognized')
    ) {
      return throwError(
        () =>
          new Error('Invalid guest token. Refresh the page and try again', {
            cause: 'invalid token',
          })
      );
    } else if (error.status === 403 || error.status === 404) {
      errorMessage = 'Invalid email or password';
    } else if (error.status === 0) {
      errorMessage =
        'Could not connect to server. Please check your internet connection.';
    } else {
      console.log(
        `Backend returned code ${error.status}, body was:`,
        error.error
      );
    }
    console.log(error);
    return throwError(() => new Error(errorMessage));
  }

  changeLoggedInSubject(bool: boolean) {
    this.isLoggedInSubject.next(bool);
  }

  logout() {
    localStorage.removeItem('token_user');
    this.isLoggedInSubject.next(false);
  }

  testToken(): Observable<boolean> {
    console.log('testToken');
    return this.http
      .get(`${environment.api}/me`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token_user')}`,
        },
      })
      .pipe(
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        map((res: any) => {
          if (res.allowed) {
            console.log('valid token');
            this.changeLoggedInSubject(true);
            return true;
          } else {
            this.logout();

            return false;
          }
        }),
        catchError(this.handleTestTokenError)
      );
  }

  private handleTestTokenError(error: HttpErrorResponse) {
    let errorMessage =
      'Something bad happened; try to refresh the page, or log in again.';
    if (error.error instanceof ErrorEvent) {
      errorMessage = `An error occurred: ${error.error.message}`;
    } else if (error.status === 403) {
      errorMessage = 'Token not recognized. Please log in again';
    } else if (error.status === 0) {
      errorMessage =
        'Could not connect to server. Please check your internet connection.';
    } else {
      console.log(
        `Backend returned code ${error.status}, body was:`,
        error.error
      );
      console.log(error);
    }
    return throwError(() => new Error(errorMessage));
  }
}

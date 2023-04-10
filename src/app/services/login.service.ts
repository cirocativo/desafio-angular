import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, catchError, throwError } from 'rxjs';
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

  login(user: ILoginRequest): Observable<ILoginResponse> {
    return this.http
      .post<ILoginResponse>(`${environment.api}/token/login`, user, {
        headers: {
          'Content-Type': 'application/json',
          Authorization: 'Bearer ' + localStorage.getItem('token_guest'),
        },
      })
      .pipe(catchError(this.handleLoginError));
  }

  private handleLoginError(error: HttpErrorResponse) {
    let errorMessage = 'Something bad happened; please try again later.';
    if (error.error instanceof ErrorEvent) {
      errorMessage = `An error occurred: ${error.error.message}`;
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
      console.log(error);
    }
    return throwError(() => new Error(errorMessage));
  }

  changeLoggedInSubject(bool: boolean) {
    this.isLoggedInSubject.next(bool);
  }

  logout() {
    localStorage.removeItem('token_user');
    this.isLoggedInSubject.next(false);
  }

  testToken(): Observable<object> {
    return this.http
      .get(`${environment.api}/me`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token_user')}`,
        },
      })
      .pipe(catchError(this.handleTestError));
  }

  private handleTestError(error: HttpErrorResponse) {
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

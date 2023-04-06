import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { environment } from 'src/environments/environment.development';
import { ILoginRequest } from 'src/interfaces';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  private isLoggedInSubject = new BehaviorSubject<boolean>(false);
  public isLoggedIn$: Observable<boolean> =
    this.isLoggedInSubject.asObservable();

  constructor(private http: HttpClient) {}

  async login(user: ILoginRequest): Promise<boolean> {
    try {
      const result: any = await this.http
        .post(`${environment.api}/token/login`, user, {
          headers: {
            'Content-Type': 'application/json',
            Authorization: 'Bearer ' + localStorage.getItem('token_guest'),
          },
        })
        .toPromise();

      if (result && result.accessToken) {
        localStorage.setItem('token_user', result.accessToken);
        this.isLoggedInSubject.next(true);
        return true;
      }
      return false;
    } catch (error) {
      if (error instanceof Error) {
        console.log(error.message);
      } else {
        console.log(error);
      }
      return false;
    }
  }

  logout() {
    localStorage.removeItem('token_user');
    this.isLoggedInSubject.next(false);
  }

  async testToken(): Promise<boolean> {
    try {
      const result: any = await this.http
        .get(`${environment.api}/me`, {
          headers: {
            Authorization: `Bearer ${localStorage.getItem('token_user')}`,
          },
        })
        .toPromise();

      if (result && result.allowed) {
        this.isLoggedInSubject.next(true);
        return true;
      } else {
        this.isLoggedInSubject.next(false);
        return false;
      }
    } catch (error) {
      console.log(error);
      return false;
    }
  }
}

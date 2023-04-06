import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.development';
import { IAuthGuestResponse } from 'src/interfaces';

@Injectable({
  providedIn: 'root',
})
export class AuthorizationService {
  constructor(private http: HttpClient) {}

  async authGuest() {
    const result: IAuthGuestResponse | undefined = await this.http
      .post<IAuthGuestResponse | undefined>(
        `${environment.api}/token/guest`,
        environment.guest
      )
      .toPromise();
    if (result && result.accessToken) {
      console.log(result);
      localStorage.setItem('token_guest', result.accessToken);
      return true;
    }
    return false;
  }
}

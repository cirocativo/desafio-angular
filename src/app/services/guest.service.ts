import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.development';
import { IAuthGuestResponse } from 'src/interfaces';

@Injectable({
  providedIn: 'root',
})
export class GuestService {
  constructor(private http: HttpClient) {}

  generateGuestToken(): Observable<IAuthGuestResponse> {
    return this.http.post<IAuthGuestResponse>(
      `${environment.api}/token/guest`,
      environment.guest
    );
  }
}

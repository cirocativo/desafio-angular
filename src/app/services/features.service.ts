import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, throwError } from 'rxjs';
import { features } from 'src/database/features.populate';
import { environment } from 'src/environments/environment.development';
import {
  IFeature,
  IFeatureHttp,
  IFeatureUpdate,
  IGetFeaturesResponse,
  IService,
  IServiceHttp,
} from 'src/interfaces';

@Injectable({
  providedIn: 'root',
})
export class FeaturesService {
  constructor(private http: HttpClient) {}

  createFeature(feature: IFeature): Observable<IFeatureHttp> {
    const token_user = localStorage.getItem('token_user');
    if (token_user) {
      return this.http
        .post<IFeatureHttp>(`${environment.api}/root/features`, feature, {
          headers: {
            Authorization: 'Bearer ' + token_user,
          },
        })
        .pipe(catchError(this.handleError));
    } else {
      return throwError(
        () =>
          new Error('Invalid user token. Please log in again', {
            cause: 'invalid token',
          })
      );
    }
  }

  getFeatures(offset: number, limit: number): Observable<IGetFeaturesResponse> {
    const token_user = localStorage.getItem('token_user');
    if (token_user) {
      return this.http
        .get<IGetFeaturesResponse>(
          `${environment.api}/root/features?offset=${offset}&limit=${limit}`,
          {
            headers: {
              Authorization: 'Bearer ' + token_user,
            },
          }
        )
        .pipe(catchError(this.handleError));
    } else {
      return throwError(
        () =>
          new Error('Invalid user token. Please log in again', {
            cause: 'invalid token',
          })
      );
    }
  }

  getFeaturesBySearch(
    offset: number,
    limit: number,
    text: string
  ): Observable<IGetFeaturesResponse> {
    const token_user = localStorage.getItem('token_user');
    if (token_user) {
      return this.http
        .get<IGetFeaturesResponse>(
          `${environment.api}/root/features?offset=${offset}&limit=${limit}&search=${text}`,
          {
            headers: {
              Authorization: 'Bearer ' + token_user,
            },
          }
        )
        .pipe(catchError(this.handleError));
    } else {
      return throwError(
        () =>
          new Error('Invalid user token. Please log in again', {
            cause: 'invalid token',
          })
      );
    }
  }

  private handleError(error: HttpErrorResponse) {
    let errorMessage = 'Something bad happened; please try again later.';
    if (error.error instanceof ErrorEvent) {
      errorMessage = `An error occurred: ${error.error.message}`;
    } else if (error.status === 403) {
      return throwError(
        () =>
          new Error('Invalid user token. Please log in again', {
            cause: 'invalid token',
          })
      );
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

  getFeature(id: string): Observable<IFeatureHttp> {
    const token_user = localStorage.getItem('token_user');
    if (token_user) {
      return this.http
        .get<IFeatureHttp>(`${environment.api}/root/features/${id}`, {
          headers: {
            Authorization: 'Bearer ' + token_user,
          },
        })
        .pipe(catchError(this.handleError));
    } else {
      return throwError(
        () =>
          new Error('Invalid user token. Please log in again', {
            cause: 'invalid token',
          })
      );
    }
  }

  deleteFeature(id: string): Observable<IFeatureHttp> {
    const token_user = localStorage.getItem('token_user');
    if (token_user) {
      return this.http
        .delete<IFeatureHttp>(`${environment.api}/root/features/${id}`, {
          headers: {
            Authorization: 'Bearer ' + token_user,
          },
        })
        .pipe(catchError(this.handleError));
    } else {
      return throwError(
        () =>
          new Error('Invalid user token. Please log in again', {
            cause: 'invalid token',
          })
      );
    }
  }

  updateFeature(id: string, feature: IFeatureUpdate): Observable<IFeatureHttp> {
    const token_user = localStorage.getItem('token_user');
    if (token_user) {
      return this.http
        .patch<IFeatureHttp>(
          `${environment.api}/root/features/${id}`,
          feature,
          {
            headers: {
              Authorization: 'Bearer ' + token_user,
            },
          }
        )
        .pipe(catchError(this.handleError));
    } else {
      return throwError(
        () =>
          new Error('Invalid user token. Please log in again', {
            cause: 'invalid token',
          })
      );
    }
  }

  addServiceToFeature(
    feature: IFeature,
    service: IService
  ): Observable<IFeatureHttp> {
    const token_user = localStorage.getItem('token_user');
    console.log('Adding service to feature', feature);
    if (token_user) {
      return this.http
        .post<IFeatureHttp>(
          `${environment.api}/root/features/${feature.id}/services`,
          service,
          {
            headers: {
              Authorization: 'Bearer ' + token_user,
            },
          }
        )
        .pipe(catchError(this.handleError));
    } else {
      return throwError(
        () =>
          new Error('Invalid user token. Please log in again', {
            cause: 'invalid token',
          })
      );
    }
  }

  updateFeatureServiceFromIndex(
    feature: IFeature,
    serviceIndex: number,
    service: Partial<IService>
  ) {
    const featureIndex = features.findIndex((f) => feature.id === f.id);

    const oldService = features[featureIndex].services[serviceIndex];

    const newService: Partial<IService> = {
      method: service.method || oldService.method,
      endpoint: service.endpoint || oldService.endpoint,
      description: service.description || oldService.description,
    };
    if (
      newService.method != oldService.method ||
      newService.endpoint != oldService.endpoint
    ) {
      this.checkServiceExclusivity(newService);
    }

    features[featureIndex].services[serviceIndex] = newService;
  }

  getServiceById(
    featureId: string,
    serviceId: string
  ): Observable<IServiceHttp> {
    const token_user = localStorage.getItem('token_user');
    if (token_user) {
      return this.http
        .get<IServiceHttp>(
          `${environment.api}/root/features/${featureId}/services/${serviceId}`,
          {
            headers: {
              Authorization: 'Bearer ' + token_user,
            },
          }
        )
        .pipe(catchError(this.handleError));
    } else {
      return throwError(
        () =>
          new Error('Invalid user token. Please log in again', {
            cause: 'invalid token',
          })
      );
    }
  }

  updateServiceFromFeature(
    feature: IFeature,
    serviceId: string,
    service: Partial<IService>
  ): Observable<IServiceHttp> {
    console.log('Updating service', service);
    const token_user = localStorage.getItem('token_user');
    if (token_user) {
      return this.http
        .patch<IServiceHttp>(
          `${environment.api}/root/features/${feature.id}/services/${serviceId}`,
          service,
          {
            headers: {
              Authorization: 'Bearer ' + token_user,
            },
          }
        )
        .pipe(catchError(this.handleError));
    } else {
      return throwError(
        () =>
          new Error('Invalid user token. Please log in again', {
            cause: 'invalid token',
          })
      );
    }
  }

  deleteServiceFromFeature(featureId: string, serviceId: string) {
    const token_user = localStorage.getItem('token_user');
    if (token_user) {
      return this.http
        .delete(
          `${environment.api}/root/features/${featureId}/services/${serviceId}`,
          {
            headers: {
              Authorization: 'Bearer ' + token_user,
            },
          }
        )
        .pipe(catchError(this.handleError));
    } else {
      return throwError(
        () =>
          new Error('Invalid user token. Please log in again', {
            cause: 'invalid token',
          })
      );
    }
  }

  deleteFeatureServiceFromIndex(feature: IFeature, serviceIndex: number): void {
    const featureIndex = features.findIndex((f) => feature.id === f.id);

    features[featureIndex].services.splice(serviceIndex, 1);
  }

  checkFeatureExclusivity(feature: IFeature | IFeatureUpdate) {
    if (feature.name) {
      const featureNameAlreadyExists = features.find(
        (f) => f.name === feature.name
      );

      if (featureNameAlreadyExists)
        throw new Error('This feature name already exists');
    }
  }

  checkServiceExclusivity(service: Partial<IService>) {
    const repeatedService = features.some((feature) =>
      feature.services.some(
        (s) => s.method === service.method && s.endpoint === service.endpoint
      )
    );

    if (repeatedService) {
      throw new Error('This service already exists');
    }
  }
}

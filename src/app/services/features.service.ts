import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, map, throwError } from 'rxjs';
import { features } from 'src/database/features.populate';
import { environment } from 'src/environments/environment.development';
import {
  IFeature,
  IFeatureUpdate,
  IGetFeaturesResponse,
  IService,
} from 'src/interfaces';
import { v4 as uuid } from 'uuid';

@Injectable({
  providedIn: 'root',
})
export class FeaturesService {
  constructor(private http: HttpClient) {}

  createFeature(feature: IFeature): void {
    const id = uuid();

    const newFeature: IFeature = { ...feature, id: id };

    this.checkFeatureExclusivity(newFeature);

    features.push(newFeature);
  }

  getFeatures(): IFeature[] {
    return features;
  }

  getFeaturesHttp(
    offset: number,
    limit: number
  ): Observable<IGetFeaturesResponse> {
    const token_user = localStorage.getItem('token_user');
    if (token_user) {
      return this.http.get<IGetFeaturesResponse>(
        `${environment.api}/root/features?offset=${offset}&limit=${limit}`,
        {
          headers: {
            Authorization: 'Bearer ' + token_user,
          },
        }
      );
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

  getFeatureById(id: string): IFeature {
    const feature = features.find((feature) => feature.id === id);
    if (feature) return feature;
    throw new Error(`Could not find this feature`);
  }

  updateFeature(id: string, feature: IFeatureUpdate) {
    console.log(feature);
    console.log(feature.name);
    console.log(feature.description);
    const featureToUpdateIndex = features.findIndex((f) => f.id === id);

    if (feature.name != features[featureToUpdateIndex].name)
      this.checkFeatureExclusivity(feature);

    if (feature.description != undefined) {
      features[featureToUpdateIndex].description = feature.description;
    }
    if (feature.name) {
      features[featureToUpdateIndex].name = feature.name;
    }
  }

  deleteFeature(feature: IFeature): void {
    const featureToDeleteIndex = features.findIndex((f) => feature.id === f.id);

    features.splice(featureToDeleteIndex, 1);
  }

  addServiceToFeature(feature: IFeature, service: IService) {
    this.checkServiceExclusivity(service);

    const featureIndex = features.findIndex((f) => feature.id === f.id);

    features[featureIndex].services.push(service);
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

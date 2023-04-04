import { Injectable } from '@angular/core';
import { features } from 'src/database/features.populate';
import { IFeature, IFeatureUpdate, IService } from 'src/interfaces';
import { v4 as uuid } from 'uuid';
@Injectable({
  providedIn: 'root',
})
export class FeaturesService {
  createFeature(feature: IFeature): void {
    const id = uuid();

    const newFeature: IFeature = { ...feature, id: id };

    this.checkFeatureExclusivity(newFeature);

    features.push(newFeature);
  }

  getFeatures(): IFeature[] {
    return features;
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

import { IFeature, IFeatureUpdate, IService } from 'src/interfaces';
import { features } from './features.populate';
import { v4 as uuid } from 'uuid';

const featuresBD = features;

export function createFeature(feature: IFeature): void {
  const id = uuid();

  const newFeature: IFeature = { ...feature, id: id };

  checkFeatureExclusivity(newFeature);

  featuresBD.push(newFeature);
}

export function getFeatures(): IFeature[] {
  return featuresBD;
}

export function getFeatureById(id: string): IFeature {
  const feature = featuresBD.find((feature) => feature.id === id);
  if (feature) return feature;
  throw new Error(`Could not find this feature`);
}

export function updateFeature(id: string, feature: IFeatureUpdate) {
  console.log(feature);
  console.log(feature.name);
  console.log(feature.description);
  const featureToUpdateIndex = featuresBD.findIndex((f) => f.id === id);

  if (feature.name != featuresBD[featureToUpdateIndex].name)
    checkFeatureExclusivity(feature);

  if (feature.description != undefined) {
    featuresBD[featureToUpdateIndex].description = feature.description;
  }
  if (feature.name) {
    featuresBD[featureToUpdateIndex].name = feature.name;
  }
}

export function deleteFeature(feature: IFeature): void {
  const featureToDeleteIndex = featuresBD.findIndex((f) => feature.id === f.id);

  featuresBD.splice(featureToDeleteIndex, 1);
}

export function addServiceToFeature(feature: IFeature, service: IService) {
  checkServiceExclusivity(service);

  const featureIndex = featuresBD.findIndex((f) => feature.id === f.id);

  featuresBD[featureIndex].services.push(service);
}

export function updateFeatureServiceFromIndex(
  feature: IFeature,
  serviceIndex: number,
  service: Partial<IService>
) {
  const featureIndex = featuresBD.findIndex((f) => feature.id === f.id);

  const oldService = featuresBD[featureIndex].services[serviceIndex];

  const newService: Partial<IService> = {
    method: service.method || oldService.method,
    endpoint: service.endpoint || oldService.endpoint,
    description: service.description || oldService.description,
  };
  if (
    newService.method != oldService.method ||
    newService.endpoint != oldService.endpoint
  ) {
    checkServiceExclusivity(newService);
  }

  featuresBD[featureIndex].services[serviceIndex] = newService;
}

export function deleteFeatureServiceFromIndex(
  feature: IFeature,
  serviceIndex: number
): void {
  const featureIndex = featuresBD.findIndex((f) => feature.id === f.id);

  featuresBD[featureIndex].services.splice(serviceIndex, 1);
}

function checkFeatureExclusivity(feature: IFeature | IFeatureUpdate) {
  if (feature.name) {
    const featureNameAlreadyExists = featuresBD.find(
      (f) => f.name === feature.name
    );

    if (featureNameAlreadyExists)
      throw new Error('This feature name already exists');
  }
}

export function checkServiceExclusivity(service: Partial<IService>) {
  const repeatedService = featuresBD.some((feature) =>
    feature.services.some(
      (s) => s.method === service.method && s.endpoint === service.endpoint
    )
  );

  if (repeatedService) {
    throw new Error('This service already exists');
  }
}

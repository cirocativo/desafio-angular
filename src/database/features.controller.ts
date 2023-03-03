import { IFeature, IFeatureRequest, IService } from 'src/interfaces';
import { features } from './features';
import { v4 as uuid } from 'uuid';

const featuresBD = features;

export function createFeature(feature: IFeatureRequest): void {
  const id = uuid();

  const newFeature: IFeature = { ...feature, id: id };

  checkFeatureExclusivity(newFeature);

  featuresBD.push(newFeature);
}

export function getFeatures(): IFeature[] {
  return featuresBD;
}

export function updateFeature(id: string, feature: IFeature) {
  const featureToUpdateIndex = featuresBD.findIndex((f) => f.id === id);

  if (feature.name != featuresBD[featureToUpdateIndex].name)
    checkFeatureExclusivity(feature);

  featuresBD[featureToUpdateIndex].description = feature.description;
  featuresBD[featureToUpdateIndex].name = feature.name;
}

export function deleteFeature(feature: IFeature): void {
  const featureToDeleteIndex = featuresBD.findIndex((f) => feature.id === f.id);

  featuresBD.splice(featureToDeleteIndex, 1);
}

export function addServiceToFeature(feature: IFeature, service: IService) {
  const featureIndex = featuresBD.findIndex((f) => feature.id === f.id);

  featuresBD[featureIndex].services.push(service);
}

export function updateFeatureServiceFromIndex(
  feature: IFeature,
  serviceIndex: number,
  service: IService
) {
  const featureIndex = featuresBD.findIndex((f) => feature.id === f.id);

  featuresBD[featureIndex].services[serviceIndex] = service;
}

export function deleteFeatureServiceFromIndex(
  feature: IFeature,
  serviceIndex: number
): void {
  const featureIndex = featuresBD.findIndex((f) => feature.id === f.id);

  featuresBD[featureIndex].services.splice(serviceIndex, 1);
}

function checkFeatureExclusivity(feature: IFeature) {
  const featureNameAlreadyExists = featuresBD.find(
    (f) => f.name === feature.name
  );

  if (featureNameAlreadyExists) throw new Error('Feature name already exists');
}

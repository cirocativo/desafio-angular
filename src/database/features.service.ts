import { IFeature, IFeatureRequest } from 'src/interfaces';
import { features } from './features';
import { v4 as uuid } from 'uuid';

let featuresBD = features;

export function createFeature(feature: IFeatureRequest): void {
  const id = uuid();

  const newFeature: IFeature = { ...feature, id: id };

  featuresBD.push(newFeature);
}

export function getFeatures(): IFeature[] {
  return featuresBD;
}

export function deleteFeature(feature: IFeature): void {
  let featureToDeleteIndex = featuresBD.findIndex((f) => feature.id === f.id);

  featuresBD.splice(featureToDeleteIndex, 1);
}

import { IFeature } from 'src/interfaces';
import { features } from './features';

let featuresBD = features;

export function deleteFeature(feature: IFeature): void {
  let featureToDeleteIndex = featuresBD.findIndex((f) => feature.id === f.id);

  featuresBD.splice(featureToDeleteIndex, 1);
}

export function getFeatures(): IFeature[] {
  return featuresBD;
}

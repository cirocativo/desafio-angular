export interface IFeatureService {
  method: string;
  endpoint: string;
  description: string;
}

export interface IFeature {
  id: string;
  name: string;
  description: string;
  services: IFeatureService[];
}

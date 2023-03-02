export interface IFeatureService {
  method: string;
  endpoint: string;
  description: string;
}

export interface IFeatureRequest {
  name: string;
  description: string;
  services: IFeatureService[];
}

export interface IFeature extends IFeatureRequest {
  id: string;
}

export interface IService {
  method: string;
  endpoint: string;
  description: string;
}

export interface IFeatureRequest {
  name: string;
  description: string;
  services: IService[];
}

export interface IFeature extends IFeatureRequest {
  id: string;
}

export interface IServiceHandler {
  feature: IFeature;
  serviceIndex: number;
}

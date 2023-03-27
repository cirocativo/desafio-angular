export interface IService extends IResource {
  method: string;
  endpoint: string;
  description: string;
}

export interface IFeature extends IResource {
  name: string;
  description: string;
  services: Partial<IService>[];
}

export interface IFeatureUpdate {
  name?: string;
  description?: string;
}

export interface IResource {
  id: string;
}

export interface IServiceHandler {
  feature: IFeature;
  serviceIndex: number;
}

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

export interface IServiceUpdate {
  endpoint?: string;
  description?: string;
  method?: string;
}
export interface IResource {
  id: string;
}
export interface IServiceHandler {
  feature: IFeature;
  serviceIndex: number;
}

export interface FeatureNode {
  name: string;
  description: string;
  id: string;
  index: number;
  method: string;
  children?: FeatureNode[];
}

export interface IAuthGuestResponse {
  accessToken: string;
  features: string[];
}

export interface ILoginRequest {
  email: string;
  password: string;
  type?: string;
}

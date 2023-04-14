export interface IService {
  method: string;
  endpoint: string;
  description: string;
}

export interface IFeature {
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

export interface IServiceHandler {
  feature: IFeatureHttp;
  serviceId: string;
  serviceIndex: number;
}

export interface FeatureNode {
  name: string;
  description: string;
  id: string;
  featureId: string;
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

export interface ILoginResponse extends IAuthGuestResponse {
  userId: string;
}

export interface IGetFeaturesResponse {
  count: number;
  _links: ILinks;
  items: IFeatureHttp[];
}

export interface IGetFeaturesRequest {
  pageSize: number;
  pageIndex: number;
}

export interface IFeatureHttp {
  name: string;
  description: string;
  id: string;
  createdAt: Date;
  deletedAt: Date;
  updatedAt: Date;
  _links: Partial<ILinks>;
  services: IServiceHttp[];
}

export interface IServiceHttp {
  name: string;
  description: string;
  id: string;
  endpoint: string;
  method: string;
  featureId: string;
  createdAt: Date;
  updatedAt: Date;
  deletedAt: Date;
}

export interface ILinks {
  last: ILink;
  next: ILink;
  self: ILink;
  first: ILink;
  previous: ILink;
}

export interface ILink {
  limit: number;
  offset: number;
  page: number;
  path: string;
}

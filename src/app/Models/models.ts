import { Observable } from "rxjs";

export interface AdministrableFeature {
  module;
  manager;
  component;
}

export interface IFeatureManager {
  type: string;
  label: string;
  schema: any;
  service: any;
  UIView: any;
  options: any;
  getFeatureElements(): Observable<any>;
  getFeatureElement(id: string);
  createFeatureElement(featureElement: any);
  updateFeatureElement(id: string, featureElement: any);
  deleteFeatureElement(id: string);
}

export interface Feature {
  type: string;
  label: string;
  elements: any[];
}

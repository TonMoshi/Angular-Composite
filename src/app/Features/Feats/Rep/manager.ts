
import { Injectable } from '@angular/core';

import { Service } from './service';
import { IFeatureManager } from '../../models';
import { UIComponent } from './components';
import { Observable } from 'rxjs';


@Injectable()
export class Manager implements IFeatureManager {
  type: string;
  label: string;
  schema: any;
  UIView: any;
  options: any;

  constructor(public service: Service) {
    this.type = 'rep';
    this.label = 'REP';
    this.UIView = UIComponent;
    this.options = {
      create: true,
      delete: true
    };
  }

  getFeatureElements(): Observable<any> {
    return this.service.getElements(this.type);
  }

  getFeatureElement(id) {
    return this.service.getElement(id);
  }

  createFeatureElement(featureElement) {
    return this.service.createElement(featureElement);
  }

  updateFeatureElement(id, featureElement) {
    return this.service.updateElement(id, featureElement);
  }

  deleteFeatureElement(id) {
    return this.service.deleteElement(id);
  }
}

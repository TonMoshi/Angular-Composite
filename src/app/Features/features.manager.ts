
import { Injectable } from '@angular/core';

import { InjectorAdapter } from './injector.adapter';
import { Feature, IFeatureManager } from './models';
import { FeaturesList } from './Feats';

@Injectable()
export class FeaturesManager {
  private features: IFeatureManager[];

  constructor(private injector: InjectorAdapter) {
    this.features = this.injectFeatures(FeaturesList, this.injector);
  }

  getFeatures(): Partial<Feature>[] {
    return Object.values(this.features).map(({ type, label }) => ({
      type,
      label,
    }));
  }

  getFeatureManager(key: string): IFeatureManager {
    return this.features.find(({ type }) => type === key);
  }

  private injectFeatures(list: any[], injector: InjectorAdapter) {
    return list.map(({ manager }) => injector.get<any>(manager));
  }
}

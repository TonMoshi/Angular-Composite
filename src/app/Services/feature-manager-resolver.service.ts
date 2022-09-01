import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  Resolve,
  RouterStateSnapshot,
} from '@angular/router';

import { Observable, of } from 'rxjs';

import { FeaturesManager, IFeatureManager } from '../Features';
import { ParamKeys } from '../Models';

@Injectable()
export class FeatureManagerResolver implements Resolve<any> {
  constructor(private featuresManager: FeaturesManager) {}

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<IFeatureManager> {
    const key = route.paramMap.get(ParamKeys.Type);
    const manager = this.featuresManager.getFeatureManager(key);
    return of(manager);
  }
}

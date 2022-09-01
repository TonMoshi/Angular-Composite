import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InjectorAdapter } from './injector.adapter';
import { FeaturesManager } from './features.manager';
import { ConfigBaseService } from '../services/config-base.service';

@NgModule({
  declarations: [],
  imports: [CommonModule],
  providers: [InjectorAdapter, FeaturesManager, ConfigBaseService],
})
export class AdministrableFeaturesModule {}

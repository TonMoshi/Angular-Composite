
import { AdministrableFeature } from '../../models';

import { Manager } from './manager';
import { Module } from './module';
import { UIComponent } from './components';

export const RepFeature: AdministrableFeature = {
  module: Module,
  manager: Manager,
  component: UIComponent
};

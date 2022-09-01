
import { IFeatureManager } from '../models';
import {
  getBaseFeature,
  getBaseFeatureElements,
  getBaseFeatureElement,
  createBaseFeatureElement,
  updateBaseFeatureElement,
  deleteBaseFeatureElement,
} from './base-manager';

function decorateElement({ slug: name, _id: id, service }) {
  const description = (_id) => `id: ${_id}`;
  return {
    name,
    description: description(id),
    service
  };
}

export function getConfigBaseFeature(manager: IFeatureManager) {
  const { service, type, label } = manager;
  return getBaseFeature(service.getElements(), decorateElement, type, label);
}

export function getConfigBaseFeatureElements(manager: IFeatureManager) {
  const { service, type } = manager;
  return getBaseFeatureElements(service.getElements(type), decorateElement);
}

export function getConfigBaseFeatureElement(
  manager: IFeatureManager,
  id: string
) {
  const { service } = manager;
  return getBaseFeatureElement(service.getElement(id));
}

export function createConfigBaseFeatureElement(manager: any, featureElement: any) {
  const { service } = manager;
  return createBaseFeatureElement(service.createElement(featureElement));
}

export function updateConfigBaseFeatureElement(manager: any, id: any, featureElement: any) {
  const { service } = manager;
  return updateBaseFeatureElement(service.updateElement(id, featureElement));
}

export function deleteConfigBaseFeatureElement(manager: any, id: any) {
  const { service } = manager;
  return deleteBaseFeatureElement(service.deleteElement(id));
}


import { from } from 'rxjs';
import { map } from 'rxjs/operators';

export function getBaseFeature(featuresElements, decorateElement, type, label) {
  return featuresElements.pipe(
    map((elements: any[]) => {
      return {
        type,
        label,
        elements: elements.map(decorateElement),
      };
    })
  );
}

export function getBaseFeatureElements(featuresElements, decorateElement) {
  return featuresElements.pipe(
    map((elements: any[]) => elements.map(decorateElement))
  );
}

export function getBaseFeatureElement(featuresElement) {
  return from(featuresElement);
}

export function createBaseFeatureElement(featuresElement) {
  return featuresElement;
}

export function updateBaseFeatureElement(featureElement) {
  return featureElement;
}

export function deleteBaseFeatureElement(featureElement) {
  return featureElement;
}

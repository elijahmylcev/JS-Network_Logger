import { getElement } from './getElement';
import { integrateElement } from './integrateElement';

export function addElement(classElement) {
  const element = document.querySelector(classElement);
  if (element) {
    element.remove();
  }
  getElement(integrateElement);
}

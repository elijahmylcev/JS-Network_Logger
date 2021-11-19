import { getElement, integrateElement } from './index.js';
import mock from 'xhr-mock';

describe('getElement(callback)', () => {
  beforeEach(() => {
    // replace the real XHR object with the mock XHR object before each test
    mock.setup();
  });
  test('XHR must be called', () => {});
  test.todo('callback must be called');
});

describe('IntegrateElement(address)', () => {
  test.todo('CreateElement div');
  test.todo('innerHTML method must be called');
});

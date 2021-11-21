import mock from 'xhr-mock';
import { getElement } from '../getElement.js';

describe('getElement(callback): XHR must be called', () => {
  // replace the real XHR object with the mock XHR object before each test
  beforeEach(() => mock.setup());
  // put the real XHR object back and clear the mocks after each test
  afterEach(() => mock.teardown());

  test('XHR must be called', () => {
    const image = 'url';
    mock.get('https://randomfox.ca/floof/', {
      body: JSON.stringify({ image }),
    });

    getElement((data) => {
      expect(data).toBe(image);
    });
  });
});

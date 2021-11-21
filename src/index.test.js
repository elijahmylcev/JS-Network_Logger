'use strict';

import { getElement, integrateElement } from './index.js';
import mock from 'xhr-mock';

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

describe('integrateElement(address)', () => {
  test('CreateElement div', () => {
    // document.body.innerHTML = '<div>' + '<span>' + '</span>' + '</div>';
    // console.log(document.body.innerHTML);
    // console.log(document.createElement('div'));
    const insertBefore = jest.fn();
    const address = 'link';
    expect(integrateElement(address)).toBeCalled();
  });
  test.todo('innerHTML method must be called');
});

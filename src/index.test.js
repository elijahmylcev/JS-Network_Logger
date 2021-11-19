import { getElement } from './index.js'
import mock from 'xhr-mock';

function mockFetch(status, data) {
  const xhrMockObj = {
    open: jest.fn(),
    send: jest.fn(),
    setRequestHeader: jest.fn(),
    readyState: 4,
    status,
    response: JSON.stringify(data),
    onload: jest.fn().mockImplementation(() => data),
  };
  const xhrMockClass = function () {
    return xhrMockObj;
  };
  window.XMLHttpRequest = jest.fn().mockImplementation(xhrMockClass);
  // setTimeout(() => {
  //   xhrMockObj['onreadystatechange']();
  //   xhrMockObj['onload']();
  // }, 1000);
  return xhrMockObj;
}

describe('getElement(callback)', () => {
  
  test('open and send methods must be called', () => {
    const image = 'fskdlfjksnfksldjf';
    mock.setup();
    mock.get('https://randomfox.ca/floof/', {
      body: JSON.stringify({ image }),
    });
    getElement((data) => {
      expect(data).toBe(image);
    });
  });

  test.todo('callback must be called')
});

describe('IntegrateElement(address)', () => {
  test.todo('CreateElement div')
  test.todo('innerHTML method must be called')
});
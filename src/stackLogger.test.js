// jest.mock('node-fetch');
// import fetch from 'node-fetch';
// const {Response} = jest.requireActual('node-fetch');

import { store, errors } from './stackLogger';

let mock = null;

// function mockFetch(status, data) {
//   const xhrMockObj = {
//     open: jest.fn(),
//     send: jest.fn(),
//     setRequestHeader: jest.fn(),
//     readyState: 4,
//     status,
//     response: JSON.stringify(data),
//   };
//   const xhrMockClass = function () {
//     return xhrMockObj;
//   };
//   window.XMLHttpRequest = jest.fn().mockImplementation(xhrMockClass);
//   setTimeout(() => {
//     xhrMockObj['onreadystatechange']();
//     xhrMockObj['onload']();
//   }, 1000);
// }

window.XMLHttpRequest.prototype.send = jest.fn().mockImplementation(() => {
});

const getImage = () => {
  let xhr = new XMLHttpRequest();
  xhr.open("GET", "https://randomfox.ca/floof/");
  xhr.send();
  xhr.onload = function () {
    // mock = JSON.parse(xhr.response).image;
    mock = xhr.response;
  };
  xhr.onerror = function () {
    console.log("Ошибка");
  };
  return xhr;
}

describe('The modified function should send a request', () => {
  
  test('store', () => {
    const xhr = getImage();

    // Create the event
    const event = new CustomEvent(
      "load",
      { "response": { "image": "1" } },
    );

    // Dispatch/Trigger/Fire the event
    xhr.dispatchEvent(event);

    console.dir({ errors, store, mock });
  });

});
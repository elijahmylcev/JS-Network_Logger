import { addElement } from '../addElement.js';
const $ = require('jquery');
describe('Should be called getElement after click btn', () => {
  test('click element = false', () => {
    document.body.innerHTML = `
      <button class="btn">GetElementFox</button> <div class="wrapper"><div></div></div>
    `;

    const btn = document.querySelector('.btn');
    const result = $(btn).click(addElement('.wrapper'));

    expect(result.length).toBe(1); // <=> toHaveBeenCalled
  });

  test('should condition element = true', () => {});
});

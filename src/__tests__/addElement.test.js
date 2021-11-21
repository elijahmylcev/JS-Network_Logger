import { addElement } from '../addElement.js';
describe('Should be called getElement after click btn', () => {
  test('click', () => {
    document.body.innerHTML = `
      <button class="btn">GetElementFox</button> <div class="wrapper"></div>
    `;
    const getElement = jest.fn();
    const integrateElement = jest.fn();
    const btn = document.querySelector('.btn');
    btn.addEventListener('click', addElement('.wrapper'));
    // expect().toHaveBeenCalled();
  });
});

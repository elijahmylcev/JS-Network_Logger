import { addElement } from '../addElement.js';
import $ from 'jquery';

describe('Should be called getElement after click btn', () => {
  let btn;
  beforeEach(() => {
    document.body.innerHTML = `
      <button class="btn">GetElementFox</button> <div class="wrapper"><div></div></div>
    `;
    btn = document.querySelector('.btn');
  });
  test('click element = false', () => {
    const result = $(btn).click(addElement('.wrapper'));
    expect(result.length).toBe(1); // <=> toHaveBeenCalled
  });

  test('checking conditions', () => {
    const removeMock = jest.fn();
    document.querySelector = jest.fn().mockImplementation(() => ({ remove: removeMock }));
    addElement('.wrapper');
    expect(removeMock).toBeCalled();
  });
});

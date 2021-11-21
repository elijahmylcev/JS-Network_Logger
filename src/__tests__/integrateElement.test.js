import { integrateElement } from '../integrateElement.js';

describe('integrateElement(address)', () => {
  beforeEach(() => {
    document.body.innerHTML = `<div> <div class="start"> </div> </div>`;
  });
  test('CreateElement div', () => {
    const address = 'http://localhost:3001/link';
    integrateElement(address);
    const result = document.querySelector('.wrapper__img_photo');
    expect(result.src).toBe(address);
  });
  test('If !address innerHTML = Ops!', () => {
    integrateElement();
    const result = document.querySelector('.fail');
    expect(result.textContent).toContain('OOOps!');
  });
});

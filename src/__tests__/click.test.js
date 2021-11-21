describe('Should be called getElement after click btn', () => {
  test('click', () => {
    const getElement = jest.fn();
    document.body.innerHTML = `
      <button class="btn">GetElementFox</button>
    `;
  });
});

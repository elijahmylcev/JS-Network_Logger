import stackLogger from './stackLogger'; 

describe('stackLogger', () => {
  test('should return array', () => {
    expect(Array.isArray(stackLogger)).toBeTruthy();
  });
});

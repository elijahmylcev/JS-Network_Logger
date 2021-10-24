const stackLogger = require('./stackLogger');

describe('stackLogger', () => {
  test('should return array', () => {
    expect(Array.isArray(stackLogger)).toBeTruthy();
  });
});

import almostPi from '../index';

test('Should get a positive number', async () => {
  const pi = await almostPi();
  expect(pi).toBeGreaterThan(0);
});

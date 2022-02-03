import almostPi from '../index';

test('Should get a number', () => {
    const pi = almostPi()
    expect(pi).toBeGreaterThan(0)
});
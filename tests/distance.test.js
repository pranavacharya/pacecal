import { listUnit, convertUnit } from '../src/lib/distance';

describe('Distance', () => {
  test('list units', () => {
    expect(typeof listUnit()).toBe('object');
    expect(listUnit()).toEqual(['mi', 'km']);
  });

  test('convertUnit', () => {
    expect(convertUnit(10, 'km', 'mi')).toBeCloseTo(6.2, 1);
  });
});

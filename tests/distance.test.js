import { listUnit, convertUnit } from '../src/lib/distance';

describe('Distance', () => {
  test('list units', () => {
    expect(typeof listUnit()).toBe('object');
    expect(listUnit()).toEqual(['m', 'mi', 'km']);
  });

  test('convertUnit - km to mi', () => {
    expect(convertUnit(10, 'km', 'mi')).toBeCloseTo(6.2, 1);
  });

  test('convertUnit - km to m', () => {
    expect(convertUnit(10, 'km', 'm')).toBe(10000);
  });
});

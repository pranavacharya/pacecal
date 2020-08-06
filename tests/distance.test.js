import { listUnit, convertUnit } from '../src/lib/distance';

describe('Distance', () => {
  test('list units typeof', () => {
    expect(typeof listUnit()).toBe('object');
  });

  test('list units values', () => {
    expect(listUnit()).toEqual(['mi', 'km']);
  });

  test('convertUnit', () => {
    expect(convertUnit(10, 'km', 'mi')).toBeCloseTo(6.2, 1);
  });
});

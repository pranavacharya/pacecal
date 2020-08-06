import { listUnit, convertUnit } from '../src/lib/time';

describe('Time', () => {
  test('list units typeof', () => {
    expect(typeof listUnit()).toBe('object');
  });

  test('list units values', () => {
    expect(listUnit()).toEqual(['s', 'min', 'h']);
  });

  test('convertUnit', () => {
    expect(convertUnit(60, 'min', 's')).toBe(3600);
  });
});

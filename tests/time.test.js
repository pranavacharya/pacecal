import { listUnit, convertUnit } from '../src/lib/time';

describe('Time', () => {
  test('list units', () => {
    expect(typeof listUnit()).toBe('object');
    expect(listUnit()).toEqual(['s', 'min', 'h']);
  });

  test('convertUnit', () => {
    expect(convertUnit(60, 'min', 's')).toBe(3600);
  });
});

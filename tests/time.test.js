import { listUnit, convertUnit } from '../src/lib/time';

describe('Time', () => {
  test('list units', () => {
    expect(typeof listUnit()).toBe('object');
    expect(listUnit()).toEqual(['ms', 's', 'min', 'h']);
  });

  test('convertUnit - min to s', () => {
    expect(convertUnit(60, 'min', 's')).toBe(3600);
  });

  test('convertUnit - min to ms', () => {
    expect(convertUnit(60, 'min', 'ms')).toBe(3600000);
  });
});

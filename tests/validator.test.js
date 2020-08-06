import { paramTypeCheck, paramValidUnitCheck } from '../src/lib/validator';

describe('Validator', () => {
  test('paramTypeCheck distance success', () => {
    expect(paramTypeCheck(10, 'distance', 'number')).toBeUndefined();
  });

  test('paramTypeCheck timeUnit success', () => {
    expect(paramTypeCheck('min', 'timeUnit', 'string')).toBeUndefined();
  });

  test('paramTypeCheck TypeError', () => {
    expect(() => paramTypeCheck('10', 'distance', 'number')).toThrow(TypeError);
    expect(() => paramTypeCheck(10, 'distance')).toThrow(TypeError);
  });

  test('paramValidUnitCheck distance success', () => {
    expect(
      paramValidUnitCheck('km', 'distanceUnit', 'distance')
    ).toBeUndefined();
    expect(paramValidUnitCheck('min', 'timeUnit', 'time')).toBeUndefined();
  });

  test('paramValidUnitCheck invaild unit', () => {
    expect(() => paramValidUnitCheck('min', 'timeUnit', 'tme')).toThrow(
      TypeError
    );
    expect(() => paramValidUnitCheck('mn', 'timeUnit', 'time')).toThrow(
      TypeError
    );
  });
});

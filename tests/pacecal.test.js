import {
  Pace,
  getPaceInTime,
  getPace,
  getAreragePace,
  getAreragePaceinTime
} from '../src/pacecal';

describe('Pace Class', () => {
  test('Class instance default', () => {
    const pace = new Pace(6, 3600);
    expect(pace.distance).toBe(6);
    expect(pace.time).toBe(3600);
    expect(pace.timeUnit).toBe('s');
    expect(pace.distanceUnit).toBe('km');
    expect(pace.pace).toBe(600);
  });

  test('Class instance invalid args', () => {
    expect(() => {
      // eslint-disable-next-line no-unused-vars
      const pace = new Pace(6);
    }).toThrow(SyntaxError);
    expect(() => {
      // eslint-disable-next-line no-unused-vars
      const pace = new Pace();
    }).toThrow(SyntaxError);
  });

  test('Class instance type check', () => {
    expect(() => {
      // eslint-disable-next-line no-unused-vars
      const pace = new Pace('6', 3600);
    }).toThrow(TypeError);

    expect(() => {
      // eslint-disable-next-line no-unused-vars
      const pace = new Pace(6, '3600');
    }).toThrow(TypeError);
  });

  test('Class instance options', () => {
    const pace = new Pace(6, 3600, { distanceUnit: 'mi', timeUnit: 'min' });
    expect(pace.distance).toBe(9.65604);
    expect(pace.time).toBe(216000);
    expect(pace.timeUnit).toBe('s');
    expect(pace.distanceUnit).toBe('km');
  });

  test('Class instance options invalid', () => {
    expect(() => {
      // invalid distanceUnit
      // eslint-disable-next-line no-unused-vars
      const pace = new Pace(6, 3600, { distanceUnit: 'm', timeUnit: 'min' });
    }).toThrow(TypeError);
  });

  test('getPace method', () => {
    const pace = new Pace(10, 3600);
    expect(pace.getPace()).toBe(360);
  });

  test('getPaceTimeString method', () => {
    const pace = new Pace(10, 3600);
    expect(pace.getPaceTimeString()).toBe('00:06:00');
  });

  test('getPace on format(mi, min) method', () => {
    const pace = new Pace(10, 3600);
    expect(pace.format('mi', 'min').getPace()).toBeCloseTo(9.65, 1);
  });

  test('getPace on format(km, s) method', () => {
    const pace = new Pace(10, 3600);
    expect(pace.format('km', 's').getPace()).toBe(360);
  });

  test('getPace on format(km,min) method', () => {
    const pace = new Pace(10, 3600);
    expect(pace.format('km', 'min').getPace()).toBe(6);
  });

  test('getPace on format(mi, s) method', () => {
    const pace = new Pace(10, 3600);
    expect(pace.format('mi', 's').getPace()).toBeCloseTo(579, 0);
  });

  test('getPaceTimeString on format method', () => {
    const pace = new Pace(6, 3600);
    expect(pace.format('mi', 'min').getPaceTimeString()).toBe('00:16:05');
  });
});

describe('Pacecal', () => {
  test('getPaceInTime', () => {
    expect(getPaceInTime(10, 3600)).toBe('00:06:00');
  });

  test('getPace', () => {
    expect(getPace(10, 3600)).toBe(360);
  });

  test('getAreragePace', () => {
    expect(getAreragePace([542, 482, 427])).toBeCloseTo(483.66, 1);
  });

  test('getAreragePaceinTime', () => {
    expect(typeof getAreragePaceinTime([40, 480, 420])).toBe('string');
    expect(getAreragePaceinTime([40, 480, 420])).toBe('00:05:13');
  });
});

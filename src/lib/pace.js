import { convertUnit as timeConvertUnit, secondsToHMS } from './time';
import { convertUnit as distanceConvertUnit } from './distance';

/**
 * Function to calculate pace from distance and time
 * @param {number} time in seconds
 * @param {distance} distance in KM
 */
function calPace(time, distance) {
  return time / distance;
}

export default class Pace {
  /**
   * Create a pace object
   * @param {number} distance - default unit: km
   * @param {number} time - default unit: s
   * @param {Object} [optional] - optional params
   * @param {String} [optional.distanceUnit] - unit of distance
   * - default unit: km
   * - available units: "km", "mi"
   * @param {String} [optional.timeUnit] - unit of time
   * - default unit: s
   * - available units: "s", "min" , "h"
   */
  constructor(
    distance,
    time,
    { distanceUnit = 'km', timeUnit = 's' } = {
      distanceUnit: 'km',
      timeUnit: 's'
    }
  ) {
    // convert distance's unit to km
    this.distance = distanceConvertUnit(distance, distanceUnit, 'km');
    this.distanceUnit = 'km';

    // convert time's unit to s
    this.time = timeConvertUnit(time, timeUnit, 's');
    this.timeUnit = 's';

    // find pace in  s/km
    this.pace = calPace(this.time, this.distance);
  }

  /**
   * Function returns pace
   * @returns{number} pace
   */
  getPace() {
    return this.pace;
  }

  /**
   * Function to change pace unit
   * - default unit - s/km
   * @param {string} distanceUnit
   *  Available units
   * - km
   * - mi
   * @param {string} timeUnit
   *  Available units
   * - s
   * - min
   * - h
   * @returns {this}
   */
  format(distanceUnit, timeUnit) {
    // convert distance unit from previous unit to new unit
    this.distance = distanceConvertUnit(
      this.distance,
      this.distanceUnit,
      distanceUnit
    );
    this.distanceUnit = distanceUnit;

    // convert time unit from previous unit to new unit
    this.time = timeConvertUnit(this.time, this.timeUnit, timeUnit);
    this.timeUnit = timeUnit;

    // calculate pace with converted unit
    this.pace = calPace(this.time, this.distance);
    return this;
  }

  /**
   * @method get pace in HH:mm:ss format
   * Function to get pace in HH:mm:ss format
   * @returns {string} pace in HH:mm:ss format
   */
  getPaceTimeString() {
    // convert pace into seconds format
    const seconds = timeConvertUnit(this.pace, this.timeUnit, 's');
    return secondsToHMS(seconds);
  }
}

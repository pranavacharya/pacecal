/* eslint-disable no-console */
import { secondsToHMS } from './lib/time';

/**
 * Function to calculate pace using distance and time
 * @param {number} distance in km
 * @param {number} time in seconds
 * @returns {number} pace in seconds/km
 */
function getPace(d, t) {
  return t / d;
}

/**
 * Function to calculate pace using distance and time
 * @param {number} distance in km
 * @param {number} time in seconds
 * @returns {string} pace in hours:minutes:seconds format
 */
function getPaceInTime(d, t) {
  return secondsToHMS(getPace(d, t));
}

export { getPace, getPaceInTime };

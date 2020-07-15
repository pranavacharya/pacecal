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

/**
 * Function to calculate average pace
 * @param {Array} array of pace
 * @returns {number} pace int seconds/km
 */
function getAreragePace(pacearray) {
  let sum = 0;
  pacearray.forEach((pace) => {
    sum += pace;
  });
  return sum / pacearray.length;
}

/**
 * Function to calculate average pace
 * @param {Array} array of pace
 * @returns {string} pace in hours:minutes:seconds format
 */
function getAreragePaceinTime(pacearray) {
  return secondsToHMS(getAreragePace(pacearray));
}

export { getPace, getPaceInTime, getAreragePace, getAreragePaceinTime };

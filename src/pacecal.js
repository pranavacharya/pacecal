import { secondsToHMS } from './lib/time';
import Pace from './lib/pace';

/**
 * Function to calculate pace using distance and time
 * @param {number} distance in km
 * @param {number} time in s
 * @returns {number} pace in s/km
 */
function getPace(distance, time) {
  return time / distance;
}

/**
 * Function to calculate pace using distance and time
 * @param {number} distance in km
 * @param {number} time in s
 * @returns {string} pace in hours:minutes:s format
 */
function getPaceInTime(distance, time) {
  return secondsToHMS(getPace(distance, time));
}

/**
 * Function to calculate average pace
 * @param {Array} array of pace
 * @returns {number} pace int s/km
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
 * @returns {string} pace in HH:mm:ss format
 */
function getAreragePaceinTime(pacearray) {
  return secondsToHMS(getAreragePace(pacearray));
}

export { getAreragePace, getAreragePaceinTime, getPace, getPaceInTime, Pace };

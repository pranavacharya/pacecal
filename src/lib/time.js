const units = {
  s: {
    ratio: 1,
    name: 'seconds'
  },
  min: {
    ratio: 60,
    name: 'minutes'
  },
  h: {
    ratio: 3600,
    name: 'hours'
  }
};

/**
 * Function to convert seconds into HH:MM:SS format
 * @param {number} seconds
 * @returns {string} time in HH:MM:SS format
 */
function secondsToHMS(seconds) {
  const h = Math.floor(seconds / 3600)
    .toString()
    .padStart(2, 0);
  const m = Math.floor((seconds % 3600) / 60)
    .toString()
    .padStart(2, 0);
  const s = Math.floor((seconds % 3600) % 60)
    .toString()
    .padStart(2, 0);

  return `${h}:${m}:${s}`;
}

/**
 * Function to convert time unit
 * @param {number} time in input unit
 * @param {string} inputUnit
 * @param {string} outputUnit
 * @returns {number} time in output unit
 */
function convertUnit(time, inputUnit, outputUnit) {
  let result = 0;
  result = time * units[inputUnit].ratio;
  result *= 1 / units[outputUnit].ratio;
  return result;
}

/**
 * Function to return list of available units for time
 * @returns {Array} list of all the available units
 */
function listUnit() {
  return Object.keys(units);
}

export { convertUnit, listUnit, secondsToHMS };

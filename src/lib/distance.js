const units = {
  m: {
    ratio: 0.001,
    name: 'metre'
  },
  mi: {
    ratio: 1.60934,
    name: 'miles'
  },
  km: {
    ratio: 1,
    name: 'kilometers'
  }
};

/**
 * Function to convert distance unit;
 * @param {number} distance in input unit
 * @param {string} inputUnit
 * @param {string} outputUnit
 * @returns {number} distance in output unit
 */
function convertUnit(distance, inputUnit, outputUnit) {
  let result = 0;
  result = distance * units[inputUnit].ratio;
  result *= 1 / units[outputUnit].ratio;
  return result;
}

/**
 * Function to return list of available units for distance
 * @returns {Array} list of all the available units
 */
function listUnit() {
  return Object.keys(units);
}

export { convertUnit, listUnit };

/**
 * Function to convert distance in KM to Mile
 * @param {number} distance in KM
 * @returns {number} distance in Mile
 */
function kmToMile(distance) {
  return distance / 1.609344;
}

/**
 * Function to convert distance in Mile to KM;
 * @param {number} distance in Mile
 * @returns {number} distance in KM
 */
function mileToKM(distance) {
  return distance * 1.609344;
}

module.exports = { kmToMile, mileToKM };

import { listUnit as timeUnitList } from './time';
import { listUnit as distanceUnitList } from './distance';

/**
 * Helper function to throw errors for mandatory input parameter
 * @param {string} paramName name of the mandatory paramter
 * @throws {SyntaxError} missing param error
 */
function throwParamRequiredError(paramName) {
  throw new SyntaxError(`missing parameter : ${paramName}`);
}

/**
 * Function to validate input parameter type against required parameter type
 * @param {*} input input to validate
 * @param {string} inputParamName name of the param to validate
 * @param {*} requiredInputParamType typeof param required
 */
function paramTypeCheck(inputParam, inputParamName, requiredInputParamType) {
  // eslint-disable-next-line valid-typeof
  if (typeof inputParam !== requiredInputParamType) {
    throw new TypeError(
      `argument '${inputParamName}' is expected to be of type '${requiredInputParamType}' but recieved '${typeof inputParam}'`
    );
  }
}

/**
 * Function to validate input units and check if input units are supported
 * @param {string} inputUnit input to validate
 * @param {string} inputParamName name of the param to validate
 * @param {string} unitType distance/time
 */
function paramValidUnitCheck(inputUnit, inputParamName, unitType) {
  let units;
  if (unitType === 'distance') {
    units = distanceUnitList();
  } else if (unitType === 'time') {
    units = timeUnitList();
  } else {
    throw new TypeError('Invalid unit type');
  }
  if (!units.includes(inputUnit)) {
    throw new TypeError(
      `'${inputUnit}' is not a valid unit for '${inputParamName}', list of available units : ${units}`
    );
  }
}

export { paramTypeCheck, paramValidUnitCheck, throwParamRequiredError };

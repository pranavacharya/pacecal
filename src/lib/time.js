/**
 * Function to convert seconds into HH:MM:SS format
 * @param {number} seconds
 * @returns {string} time in HH:MM:SS format
 */
function secondsToHMS(seconds) {
  let h = Math.floor(seconds / 3600);
  let m = Math.floor((seconds % 3600) / 60);
  let s = Math.floor((seconds % 3600) % 60);
  if (h < 10) {
    h = `0${h}`;
  }
  if (m < 10) {
    m = `0${m}`;
  }
  if (s < 10) {
    s = `0${s}`;
  }
  return `${h}:${m}:${s}`;
}

module.exports = { secondsToHMS };

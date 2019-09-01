const meta = require('./data/meta');

/**
 * Finds the country details for the given country name or code
 *
 * @param {string} name Name or country code
 * @param {string|null} field Optionally enter the field to get
 * @param {null|*} defaultValue Value to return if the given country/field is not found
 *
 * @returns {null|*}
 */
function mulk(name, field = null, defaultValue = null) {
  const normalizedName = (name || '').toLowerCase();

  // Find the first country matching the details
  const foundMatch = meta.find(metaObj => metaObj.match.includes(normalizedName));

  if (!foundMatch) {
    return defaultValue;
  }

  const countryDetails = require(`./data/countries/${foundMatch.fileName}`) || {};
  if (!field) {
    return countryDetails || defaultValue;
  }

  return countryDetails[field] || defaultValue;
}

module.exports = mulk;

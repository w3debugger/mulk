const mapping = require('./data/countries/mapping.json');

function mulk(name, format) {
  const nameToLowerCase = (name || '').toLowerCase();
  let file = {};

  mapping.forEach(country => {
    if ((country.name || []).includes(nameToLowerCase)) {
      const fileName = country.name[1];

      file = require(`./countries/${fileName}`) || {};
    }
  });

  if (name) {
    return format ? file[format] : file;
  } else {
    return require(`./data.json`) || {};
  }
}

module.exports = mulk;

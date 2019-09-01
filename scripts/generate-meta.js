// Generates the meta file to be used by the library
// in finding and returning the relevant countries
const path = require('path');
const fs = require('fs');

const dataPath = path.join(__dirname, '../data');
const countriesPath = path.join(dataPath, 'countries');
const metaPath = path.join(dataPath, 'meta.json');

const countryFiles = fs.readdirSync(countriesPath);

const metaContent = [];

console.log(`Generating meta for ${countryFiles.length} countries`);

// For each of the country files, generate the meta content
countryFiles.forEach(fileName => {
  const countryFile = path.join(countriesPath, fileName);
  const countryData = require(countryFile);

  metaContent.push({
    fileName,     // File where country data is found
    match: [      // Matches for this file
      ...new Set([
        (countryData.name || '').toLowerCase(),
        (countryData.iso2 || '').toLowerCase(),
        (countryData.iso3 || '').toLowerCase(),
        (countryData.itu || '').toLowerCase()
      ].filter(name => !!name))
    ]
  });
});

fs.writeFileSync(metaPath, JSON.stringify(metaContent, null, 2));
console.log(`Successfully generated meta file at ${metaPath}`);

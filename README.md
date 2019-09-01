# mulk
> Gets the country details by country name, ITU or ISO codes 

## Installation
> You can either install using `yarn` or using `npm`

```bash
yarn add mulk
npm i mulk
```

## Usage
Import either using `require` or `import`

```javascript
const mulk = require('mulk');

// Get country by country name/itu/ISO2/ISO3
const countryByName = mulk('United Arab Emirates');
const countryByItu = mulk('UAE');
const countryByIso2 = mulk('AE');
const countryByIso3 = mulk('ARE');

// Resulting value for each of the calls above will be the country object
// {
//   "capital": "Islamabad",
//  "continent": "AS",
//  "name": "Pakistan",
//  "officialName": "Pakistan",
//  "distSign": "PK",
//  "dialCode": "92",
//  "edgar": "R0",
//  "fifa": "PAK",
//  "fips": "PK",
//  "gaul": "188",
//  "geoNameId": "1168579",
//  "olympicsId": "PAK",
//  "iso2": "PK",
//  "iso3": "PAK",
//  "currencyCode": "PKR",
//  "currencyCountryName": "PAKISTAN",
//  "currencyMinorUnit": 2,
//  "currencyName": "Pakistan Rupee",
//  "currencyNumericCode": 586,
//  "itu": "PAK",
//  "isIndependent": "Yes",
//  "languages": [
//    "ur-PK",
//    "en-PK",
//    "pa",
//    "sd",
//    "ps",
//    "brh"
//  ],
//  "m49": 586,
//  "marc": "pk",
//  "tld": ".pk",
//  "wmo": "PK"
// }

// Return default value if the country details are not found
const country = mulk('non-existing-country', null, { 
  id: 'non-existing', 
  name: 'Default Country'
});

// Get single field instead of object
const dialCode = mulk('UAE', 'dialCode');

// Get default value for field if does not exist
const dialCode = mulk('UAE', 'dialCode', '000');
```

Feel free to open an issue if you need help with some specific usecase.

## Contributions

* Report issues with problems and suggestions
* Open pull request with improvements
* Spread the word
* Reach out with any feedback [![Twitter URL](https://img.shields.io/twitter/url/https/twitter.com/w3debugger.svg?style=social&label=Follow%20%40w3debugger)](https://twitter.com/w3debugger)

## License

MIT &copy; [Muhammad Umar Mehmood](https://twitter.com/w3debugger)

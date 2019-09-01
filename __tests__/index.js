const mulk = require('../index');

test('fetch country by name/iso2/iso3/itu', () => {
  const testData = [
    { country: 'united arab emirates', expected: require('../data/countries/are')},
    { country: 'ae', expected: require('../data/countries/are')},
    { country: 'are', expected: require('../data/countries/are')},
    { country: 'uae', expected: require('../data/countries/are')},
    { country: 'nonExistingCountry', expected: null},
  ];

  testData.forEach(testItem => {
    const actualCountry = mulk(testItem.country);
    const expectedCountry = testItem.expected;

    expect(actualCountry).toEqual(expectedCountry);
  });
});

test('fetch country field', () => {
  const testData = [
    { field: 'geoNameId', expected: '1168579'},
    { field: 'currencyCode', expected: 'PKR'},
    { field: 'nonExisting', expected: null},
  ];

  testData.forEach(testItem => {
    const actualFieldValue = mulk('pakistan', testItem.field);
    const expectedFieldValue = testItem.expected;

    expect(actualFieldValue).toEqual(expectedFieldValue);
  });
});

test('fetch default country field for missing field', () => {
  const expectedFieldValue = 'defaultNonExistingValue';
  const actualFieldValue = mulk('pakistan', 'nonExistingField', expectedFieldValue);

  expect(actualFieldValue).toEqual(expectedFieldValue);
});

test('fetch default country for non existing country', () => {
  const expectedCountry = { name: 'non-existing', id: 'nonExisting'};
  const actualCountry = mulk('nonExistingCountry', null, expectedCountry);

  expect(actualCountry).toEqual(expectedCountry);
});

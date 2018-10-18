module.exports = {
  transform: {
    '.(ts|tsx)': '<rootDir>/node_modules/ts-jest/preprocessor.js'
  },
  mapCoverage: true,
  testPathIgnorePatterns: [
    '/node_modules/',
    '/lib/'
  ],
  testRegex: '(/test/.*|\\.(test|spec))\\.(ts|tsx|js)$',
  moduleFileExtensions: [ 'ts', 'tsx', 'js', 'json' ]
}
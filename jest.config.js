module.exports = {
  transform: {
    '.(ts|tsx)': 'ts-jest'
  },
  testPathIgnorePatterns: [
    '/node_modules/',
    '/lib/'
  ],
  setupFiles: [
    "<rootDir>/test/polyfills.ts",
    "<rootDir>/test/setupTests.ts"
  ],
  testRegex: '(\\.(test|spec))\\.(ts|tsx|js)$',
  moduleNameMapper: {
    "\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$": "<rootDir>/__mocks__/fileMock.ts",
    "\\.(css|less)$": "<rootDir>/__mocks__/styleMock.ts"
  },
  moduleFileExtensions: [ 'ts', 'tsx', 'js', 'json' ]
}

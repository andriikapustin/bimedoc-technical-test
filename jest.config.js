const jestPresetAngularSerializers = require('jest-preset-angular/build/serializers');
// const esModules = ['@angular-architects'].join('|');

const ignorePatterns = [
  '/node_modules/',
  '/e2e/',
  '/dist/',
];

module.exports = {
  preset: 'jest-preset-angular',
  globals: {
    'ts-jest': {
      tsconfig: '<rootDir>/tsconfig.spec.json',
      stringifyContentPathRegex: '\\.html$',
      useESM: true,
    },
  },
  setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'],
  testMatch: ['**/+(*.)+(spec).+(ts)'],
  setupFiles: ['core-js'],
  transform: {
    '^.+\\.(ts|js|html)$': 'jest-preset-angular',
  },
  testRunner : 'jest-jasmine2',
  // transformIgnorePatterns: [`/node_modules/(?!${esModules})`],
  moduleFileExtensions: ['ts', 'json', 'js', 'node'],
  snapshotSerializers: jestPresetAngularSerializers,
  testPathIgnorePatterns: ignorePatterns,
  coveragePathIgnorePatterns: ignorePatterns,
  moduleDirectories: ['node_modules', 'src'],
};

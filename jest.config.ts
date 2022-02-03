const { compilerOptions}         = require('./tsconfig.json');
const {pathsToModuleNameMapper } = require('ts-jest');
/*
 * For a detailed explanation regarding each configuration property and type check, visit:
 * https://jestjs.io/docs/configuration
 */

export default {
  bail: 1,
  clearMocks: true,
  coverageProvider: "v8",
  moduleNameMapper: pathsToModuleNameMapper(compilerOptions.paths, { prefix: '<rootDir>'}), 
  preset: 'ts-jest', 
  testMatch: [
    "**/src/**/**/*.test.js?(x)",   
  ], 
};

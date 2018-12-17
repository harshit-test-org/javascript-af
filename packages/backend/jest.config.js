module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  globalSetup: './tests/utils/globalSetup.ts',
  globalTeardown: './tests/utils/globalTeardown.ts',
  testPathIgnorePatterns: ['/node_modules/', '/dist/'],
};

module.exports = {
  roots: [
    '<rootDir>/src',
  ],
  transform: {
    '^.+\\.tsx?$': 'ts-jest',
  },
  testRegex: 'lib/.*.test\\.ts$',
  coverageDirectory: '.github/coverage/',
  collectCoverage: true,
}

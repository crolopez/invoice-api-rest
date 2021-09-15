module.exports = {
  globals: {
    'ts-jest': {
      tsconfig: 'tsconfig.json',
    },
  },
  testEnvironment: 'node',
  moduleFileExtensions: [
    'js',
    'ts',
  ],
  moduleNameMapper: {
    '@/(.*)': '<rootDir>/src/$1',
  },
  transform: {
    '^.+\\.(ts)$': 'ts-jest',
  },
  testPathIgnorePatterns: [ 'dist' ],
  preset: 'ts-jest',
}

module.exports = {
    testEnvironment: 'jsdom',
    preset: 'ts-jest',
    testEnvironment: 'jsdom',
    moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
    moduleNameMapper: {
      '\\.(css|less|scss)$': 'identity-obj-proxy',
    },
    testMatch: ['<rootDir>/src/__tests__/**/*.test.{ts,tsx}'],
  }
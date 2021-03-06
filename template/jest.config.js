module.exports = {
  collectCoverage: true,
  transform: {
    "^.+\\.ts$": "ts-jest"
  },
  moduleFileExtensions: [
    "js",
    "ts"
  ],
  testEnvironment: "node",
  testMatch: [
    "**/*.test.ts"
  ],
  globals: {
    "ts-jest": {
      tsConfig: "./tsconfig.json"
    }
  },
};

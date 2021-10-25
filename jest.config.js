module.exports = {
  verbose: true,
  testEnvironment: "jsdom",
  moduleNameMapper:{
    "\\.(css|less|sass|scss)$": "<rootDir>/__mocks__/styleMock.js",
  },
  setupFilesAfterEnv: ["<rootDir>/jest.setup.js"]
};

// https://docs.expo.dev/guides/using-eslint/
const { defineConfig } = require("eslint/config");
const expoConfig = require("eslint-config-expo/flat");

module.exports = {
  extends: ["expo", "plugin:import/recommended", "plugin:import/typescript"],
  settings: {
    "import/resolver": {
      "babel-module": {
        alias: {
          "@": "./src",
        },
      },
    },
  },
};

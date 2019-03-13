import imports from "./rules/imports";
import react from "./rules/react";
import standards from "./rules/standards";

export default {
  parser: require.resolve("babel-eslint"),
  extends: ["airbnb", "prettier", "prettier/react"],
  plugins: ["prettier"],
  env: {
    browser: true,
    es6: true,
    node: true
  },
  parserOptions: {
    ecmaVersion: 6,
    sourceType: "module",
    ecmaFeatures: {
      modules: true,
      impliedStrict: true,
      jsx: true
    }
  },
  globals: {
    window: true,
    document: true,
    navigator: true,
    fetch: true,
    XMLHttpRequest: true
  },
  rules: {
    ...react,
    ...imports,
    ...standards
  }
};

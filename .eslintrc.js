module.exports = {
  root: true,
  env: {
    node: true,
    browser: true,
    jasmine: true,
    jest: true
  },
  extends: ["airbnb-base", "plugin:vue/essential", "@vue/prettier"],
  rules: {
    "no-console": process.env.NODE_ENV === "production" ? "error" : "off",
    "no-debugger": process.env.NODE_ENV === "production" ? "error" : "off"
  },
  parserOptions: {
    parser: "babel-eslint"
  }
};

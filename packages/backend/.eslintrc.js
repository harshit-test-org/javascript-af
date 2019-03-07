const path = require("path");

module.exports = {
    "parser": "@typescript-eslint/parser",
    "extends": [
        "airbnb-base",
        "prettier",
        "prettier/@typescript-eslint",
    ],
    "plugins": ["@typescript-eslint", "prettier"],
    "parserOptions": {
        "ecmaVersion": 2018,
        "ecmaFeatures": {
            "impliedStrict": true
        },
        "sourceType": "module",
        "project": path.resolve(__dirname, "./tsconfig.json")
    },
    "env": {
        "es6": true,
        "jest": true,
        "node": true
    },
    "rules": {
        "import/no-extraneous-dependencies": ["error", {
            "packageDir": [path.resolve(__dirname, "./"), path.resolve(__dirname, "../../")],
            "devDependencies": ["**/*.test.js", "**/*.spec.js", "/testUtils/**", "/cypress/**"]
        }],
        "prefer-destructuring": "off",
        "no-underscore-dangle": "off"
    }
}

const path = require("path");

module.exports = {
    "parser": "@typescript-eslint/parser",
    "extends": [
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
    },
    "rules": {
        "prettier/prettier": "error",
    }
}

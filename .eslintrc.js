const path = require("path");

module.exports = {
    "parser": "@typescript-eslint/parser",
    "extends": [
        "plugin:@typescript-eslint/recommended",
        "prettier",
        "prettier/@typescript-eslint",
    ],
    "plugins": ["@typescript-eslint", "import", "prettier"],
    "parserOptions": {
        "ecmaVersion": 2018,
        "ecmaFeatures": {
            "impliedStrict": true
        },
        "sourceType": "module",
    },
    "rules": {
        "prettier/prettier": "error",
        "@typescript-eslint/explicit-member-accessibility": "off",
        "@typescript-eslint/explicit-function-return-type": "off",
        "@typescript-eslint/no-explicit-any": "off",
        "@typescript-eslint/interface-name-prefix": "off",
        "@typescript-eslint/no-non-null-assertion": "off",
        "@typescript-eslint/prefer-interface": "off",
        "@typescript-eslint/no-empty-interface": "off",
        "@typescript-eslint/no-unused-vars": [
            "error",
            {
                "vars": "local",
                "args": "none"
            }
        ],
        "import/prefer-default-export": "off"
    }
}

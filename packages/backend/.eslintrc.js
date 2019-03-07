const path = require("path");

module.exports = {
    "parser": "@typescript-eslint/parser",
    "extends": [
        "airbnb-base",
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
        "project": path.resolve(__dirname, "./tsconfig.json")
    },
    "env": {
        "es6": true,
        "jest": true,
        "node": true
    },
    "settings": {
        "import/resolver": {
            "typescript": {
                "directory": path.resolve(__dirname, "./tsconfig.json")
            }
        }
    },
    "rules": {
        "prettier/prettier": "error",
        "import/no-extraneous-dependencies": ["error", {
            "packageDir": [path.resolve(__dirname, "./"), path.resolve(__dirname, "../../")],
            "devDependencies": ["**/*.test.js", "**/*.spec.js", "/testUtils/**", "/cypress/**"]
        }],
        "prefer-destructuring": "off",
        "no-underscore-dangle": "off",
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
        "import/prefer-default-export": "off",
        // ? Why is this needed? Doesn't @typescript-eslint/no-unused-vars replace it?
        "no-unused-vars": [
            "error",
            {
                "vars": "local",
                "args": "none"
            }
        ],
    }
}

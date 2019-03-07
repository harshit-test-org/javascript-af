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
        "import/no-extraneous-dependencies": ["error", {
            "packageDir": [path.resolve(__dirname, "./"), path.resolve(__dirname, "../../")],
            "devDependencies": ["**/*.test.js", "**/*.spec.js", "/testUtils/**", "/cypress/**"]
        }],
        "prefer-destructuring": "off",
        "no-underscore-dangle": "off",
        "import/prefer-default-export": "off",
        // ? Why is this needed? Doesn't @typescript-eslint/no-unused-vars replace it?
        "no-unused-vars": [
            "error",
            {
                "vars": "local",
                "args": "none"
            }
        ],
        "@typescript-eslint/no-unused-vars": [
            "error",
            {
                "vars": "local",
                "args": "none"
            }
        ],
    }
}

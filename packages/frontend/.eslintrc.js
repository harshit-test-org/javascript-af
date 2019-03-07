const path = require("path");

module.exports = {
  "parser": "@typescript-eslint/parser",
  "extends": [
    "plugin:react/recommended",
    "airbnb",
    "plugin:cypress/recommended",
    "plugin:@typescript-eslint/recommended",
    "prettier",
    "prettier/react",
    "prettier/@typescript-eslint",
  ],
  "plugins": ["react", "react-hooks", "import", "cypress", "@typescript-eslint", "prettier"],
  "parserOptions": {
    "ecmaVersion": 2018,
    "ecmaFeatures": {
      "jsx": true,
      "impliedStrict": true
    },
    "sourceType": "module",
    "project": path.resolve(__dirname, "./tsconfig.json")
  },
  "env": {
    "es6": true,
    "browser": true,
    "jest": true,
    "cypress/globals": true,
    "node": true
  },
  "settings": {
    "react": {
      "version": "detect"
    },
    "import/resolver": {
      "typescript": {
        "directory": path.resolve(__dirname, "./tsconfig.json")
      }
    }
  },
  "rules": {
    "prettier/prettier": "error",
    "react-hooks/rules-of-hooks": "error",
    "react-hooks/exhaustive-deps": "warn",
    "react/prop-types": "off",
    "react/react-in-jsx-scope": "off",
    "react/jsx-filename-extension": "off",
    "react/destructuring-assignment": "off",
    "import/no-extraneous-dependencies": ["error", {
      "packageDir": [path.resolve(__dirname, "./"), path.resolve(__dirname, "../../")],
       "devDependencies": ["**/*.test.js", "**/*.spec.js", "/testUtils/**", "/cypress/**"] 
      }],
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
  }
}

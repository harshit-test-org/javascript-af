const path = require("path");

module.exports = {
  "parser": "@typescript-eslint/parser",
  "extends": [
    "plugin:react/recommended",
    "airbnb",
    "plugin:cypress/recommended",
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
  },
  "rules": {
    
    "react-hooks/rules-of-hooks": "error",
    "react-hooks/exhaustive-deps": "warn",
    "react/prop-types": "off",
    "react/react-in-jsx-scope": "off",
    "react/jsx-filename-extension": "off",
    "react/destructuring-assignment": "off",
    
    "import/no-extraneous-dependencies": ["error", {
      "packageDir": [path.resolve(process.cwd(), "./"), path.resolve(process.cwd(), "../../")],
       "devDependencies": ["**/*.test.js", "**/*.spec.js", "/testUtils/**", "/cypress/**"] 
      }],
    
  }
}

module.exports = {
  "parser": "@typescript-eslint/parser",
  "extends": [
    "plugin:react/recommended",
    "airbnb",
    "plugin:@typescript-eslint/recommended",
    "prettier",
    "prettier/react",
    "prettier/@typescript-eslint"
  ],
  "plugins": ["react", "react-hooks", "import", "@typescript-eslint", "prettier"],
  "parserOptions": {
    "ecmaVersion": 2018,
    "ecmaFeatures": {
      "jsx": true,
      "impliedStrict": true
    },
    "sourceType": "module",
    "project": __dirname + "/tsconfig.json"
  },
  "env": {
    "es6": true,
    "browser": true,
    "jest": true,
    "node": true
  },
  "settings": {
    "react": {
      "version": "detect"
    },
    "import/resolver": {
      "typescript": {
        "directory": __dirname + "/tsconfig.json"
      }
    }
  },
  "rules": {
    "prettier/prettier": "error",
    "react-hooks/rules-of-hooks": "error",
    "react-hooks/exhaustive-deps": "warn",
    "react/prop-types": "off",
    "react/react-in-jsx-scope": "off",
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
    "import/no-extraneous-dependencies": ["error", {
       "packageDir": ["./", "../../"],
       "devDependencies": ["**/*.test.js", "**/*.spec.js", "/testUtils/**", "/cypress/**"] 
      }],
    "react/jsx-filename-extension": "off",
    "react/destructuring-assignment": "off",
    "import/prefer-default-export": "off"
  }
}

module.exports = {
  "env": {
    "browser": true,
    "es2021": true
  },
  "extends": [
    "eslint:recommended",
    "plugin:react/recommended"
  ],
  "parserOptions": {
    "ecmaFeatures": {
      "jsx": true
    },
    "ecmaVersion": "latest",
    "sourceType": "module"
  },
  "plugins": [
    "react"
  ],
  "globals": {
    "__PATH_PREFIX__": "readonly"
  },
  "settings": {
    "react": {
      "version": "detect"
    }
  },
  "rules": {
    "indent": [
      "error",
      2
    ],
    "linebreak-style": [
      "error",
      "unix"
    ],
    "quotes": [
      "error",
      "single",
      {
        allowTemplateLiterals: true
      }
    ],
    "semi": [
      "error",
      "never"
    ],
    "react/prop-types": [
      "off"
    ],
    "react/no-unescaped-entities": [
      "error",
      {"forbid": [">", "}"]}
    ]
  }
}

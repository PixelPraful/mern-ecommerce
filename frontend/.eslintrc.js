
module.exports = {
  'env': {
    'browser': true,
    'node': true,
    'mocha': true,
    'es6': true
  },
  'parserOptions': {
    'ecmaFeatures': {
      'jsx': true,
      'templateStrings': true,
      'superInFunctions': false,
      'classes': true,
      'modules': true
    }
  },
  'parser': 'babel-eslint',

  'extends': [
    'eslint:recommended',
    'plugin:react/recommended'
  ],

  'rules': {
    'no-trailing-spaces': 2,
    'no-unneeded-ternary': 0,
    'strict': 0,
    'arrow-body-style': 0,
    'quotes': [2, 'single'],
    'react/no-did-mount-set-state': 0,
    'react/jsx-filename-extension': [1, { 'extensions': ['.js', '.jsx'] }],
    'react/no-array-index-key': [0],
    'react/prop-types': [0],
    'max-len': [0],
    'import/no-extraneous-dependencies': 0,
    'import/no-named-as-default': [0],
    'import/no-named-as-default-member': [0],
    'react/forbid-prop-types': [0],
    'import/prefer-default-export': [0],
    'no-console': [0],
    'jsx-a11y/href-no-hash': [0],
    'func-names': [0],
    'jsx-a11y/label-has-for': [0],
    'function-paren-newline': [0],
    'jsx-a11y/no-static-element-interactions': [0],
    'indent': ['error', 2],
    semi: ['error', 'always']
  }
}
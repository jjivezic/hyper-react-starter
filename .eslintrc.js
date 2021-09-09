module.exports = {
  root: true,
  env: {
    jest: true,
    es6: true,
    node: true
  },
  parser: 'babel-eslint',
  extends: [
    'standard', 'react-app'
  ],
  plugins: [
    'babel'
  ],
  rules: {
    indent: ['error', 2, { SwitchCase: 1 }],
    'react/prop-types': 0,
    'no-underscore-dangle': 0,
    'no-plusplus': 0,
    'no-unused-vars': ['error', { vars: 'all', args: 'after-used', ignoreRestSiblings: false }],
    'import/no-named-as-default': 0,
    'import/no-named-as-default-member': 0
  }
}

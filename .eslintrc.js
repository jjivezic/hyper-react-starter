module.exports = {
  root: true,
  env: {
    jest: true,
    es6: true,
    node: true
  },
  parser: 'babel-eslint',
  extends: ['standard', 'react-app', 'prettier'],
  plugins: ['babel', 'prettier'],
  rules: {
    'prettier/prettier': 'error',
    indent: ['error', 2, { SwitchCase: 1 }],
    'no-underscore-dangle': 0,
    'no-unused-vars': ['error', { vars: 'all', args: 'after-used', ignoreRestSiblings: false }],
    'import/no-named-as-default': 0,
    'import/no-named-as-default-member': 0,
    semi: ['error', 'never'],
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'warn'
  }
}

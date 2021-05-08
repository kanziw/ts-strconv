module.exports = {
  root: true,
  env: {
    node: true,
    jest: true,
  },
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 2021,
    project: [ 'tsconfig.eslint.json' ],
  },
  plugins: [
    '@typescript-eslint',
    'jest',
  ],
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:@typescript-eslint/recommended-requiring-type-checking',
  ],
  rules: {
    'array-bracket-spacing': [ 'error', 'always' ],
    'comma-dangle': [ 'error', 'always-multiline' ],
    'comma-spacing': [ 'error', { before: false, after: true } ],
    'computed-property-spacing': [ 'error', 'never' ],
    'key-spacing': [ 'error', { afterColon: true, beforeColon: false } ],
    'max-len': [ 'error', { code: 160, ignoreUrls: true } ],
    'sort-imports': [ 'error', { ignoreDeclarationSort: true } ],
    quotes: [ 'error', 'single', { avoidEscape: true } ],
    '@typescript-eslint/indent': [ 'error', 2 ],
    '@typescript-eslint/no-misused-promises': [ 'error', { checksVoidReturn: false } ],
    '@typescript-eslint/no-non-null-assertion': 'off',
    '@typescript-eslint/object-curly-spacing': [ 'error', 'always' ],
    '@typescript-eslint/require-await': 'off',
    '@typescript-eslint/semi': [ 'error', 'never' ],
    '@typescript-eslint/unbound-method': 'off',
  },
}

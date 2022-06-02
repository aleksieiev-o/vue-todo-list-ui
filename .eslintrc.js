module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: ['plugin:vue/vue3-essential', 'eslint:recommended', '@vue/typescript/recommended', 'prettier'],
  parserOptions: {
    ecmaVersion: 2020,
  },
  rules: {
    'no-empty': 0,
    semi: 2,
    'no-var': 'error',
    'arrow-body-style': 0,
    camelcase: 0,
    'no-underscore-dangle': 0,
    'global-require': 0,
    indent: 0,
    'import/no-dynamic-require': 0,
    'import/no-unresolved': 0,
    'import/no-webpack-loader-syntax': 0,
    'import/order': 0,
    'import/extensions': 0,
    'import/first': 0,
    'linebreak-style': 0,
    'max-len': [2, { code: 180 }],
    'no-console': [1, { allow: ['warn', 'error'] }],
    'no-debugger': 1,
    'no-param-reassign': 0,
    'no-plusplus': 0,
    'no-multiple-empty-lines': [2, { max: 1, maxBOF: 3, maxEOF: 1 }],
    quotes: [2, 'single', { allowTemplateLiterals: true }],
  },
  overrides: [
    {
      files: ['**/__tests__/*.{j,t}s?(x)', '**/tests/unit/**/*.spec.{j,t}s?(x)'],
      env: {
        jest: true,
      },
    },
  ],
};

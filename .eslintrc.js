module.exports = {
  root: true,
  env: {
    node: true
  },
  'extends': [
    'plugin:vue/vue3-recommended',
    'eslint:recommended',
    '@vue/typescript/recommended',
  ],
  parserOptions: {
    ecmaVersion: 2020
  },
  rules: {
    semi: [
      2,
      'always'
    ],
    '@typescript-eslint/no-empty-function': [
      'error',
      {
        allow: [
          'functions',
          'arrowFunctions',
          'methods'
        ]
      }
    ],
    'no-console': 'off',
    'vue/max-attributes-per-line': 'off',
    'vue/no-v-html': 'off'
  },
  overrides: [
    {
      files: [
        '**/__tests__/*.{j,t}s?(x)',
        '**/tests/unit/**/*.spec.{j,t}s?(x)'
      ],
      env: {
        jest: true
      }
    }
  ]
};

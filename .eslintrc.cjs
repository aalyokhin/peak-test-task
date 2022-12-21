/* eslint-env node */
require('@rushstack/eslint-patch/modern-module-resolution');

module.exports = {
  root: true,
  extends: [
    'plugin:vue/vue3-essential',
    'eslint:recommended',
    '@vue/eslint-config-typescript',
    '@vue/eslint-config-prettier',
  ],
  parserOptions: {
    ecmaVersion: 'latest',
  },
  rules: {
    'vue/attributes-order': ['error', { alphabetical: true }],
    'vue/component-name-in-template-casing': ['error', 'PascalCase'],
    'vue/custom-event-name-casing': ['error', 'kebab-case'],
    'vue/eqeqeq': 'error',
    'vue/key-spacing': 'error',
    'vue/no-deprecated-scope-attribute': 'error',
    'vue/no-empty-component-block': 'error',
    'vue/no-potential-component-option-typo': 'error',
    'vue/no-static-inline-styles': ['error', { allowBinding: true }],
    'vue/padding-line-between-blocks': ['error', 'always'],
    'vue/v-slot-style': ['error', { atComponent: 'shorthand' }],
    'vue/no-v-html': 'off',
  },
};

const eslint = require('@eslint/js');
const tseslint = require('typescript-eslint');
const angular = require('@angular-eslint/eslint-plugin');
const angularTemplate = require('@angular-eslint/eslint-plugin-template');
const parser = require('@typescript-eslint/parser');

module.exports = tseslint.config(
  {
    files: ['**/*.ts'],
    languageOptions: {
      parser,
      parserOptions: {
        project: './tsconfig.json',
        ecmaVersion: 'latest',
        sourceType: 'module',
      },
    },
    plugins: {
      '@typescript-eslint': tseslint.plugin,
      '@angular-eslint': angular,
    },
    extends: [
      eslint.configs.recommended,
      ...tseslint.configs.recommended,
      // ...tseslint.configs.stylistic,
    ],
    rules: {
      '@angular-eslint/directive-selector': [
        'error',
        {
          type: 'attribute',
          prefix: 'app',
          style: 'camelCase',
        },
      ],
      '@angular-eslint/component-selector': [
        'error',
        {
          type: 'element',
          prefix: 'app',
          style: 'kebab-case',
        },
      ],
      '@angular-eslint/prefer-standalone': ['error'], // standalone architecture
      // "@angular-eslint/prefer-on-push-component-change-detection": ["error"], // zoneless change detection
      '@typescript-eslint/no-explicit-any': 'off',
    },
  },
  {
    files: ['**/*.html'],
    plugins: {
      '@angular-eslint/template': angularTemplate,
    },
    extends: [
      '@angular-eslint/template/recommended',
      '@angular-eslint/template/accessibility',
    ],
    rules: {
      '@angular-eslint/template/prefer-self-closing-tags': ['error'], // self-closing components tags
      '@angular-eslint/template/prefer-control-flow': ['error'], // built-in control flow syntax
      '@angular-eslint/template/prefer-ngsrc': ['error'], // optimized images
    },
  }
);

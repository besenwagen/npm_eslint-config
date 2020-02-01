/* global module */
const ERROR = 'error';
const ALWAYS = 'always';
const NEVER = 'never';
const AS_NEEDED = 'as-needed';
const READONLY = 'readonly';
const INDENT_SIZE = 2;
const MAX_COMPLEXITY = 3;
const MAX_DEPTH = 1;
const MAX_EMPTY_LINES = 1;
const MAX_LINE_LENGTH = 72;
const MAX_PARAMETERS = 3;
const MAX_STATEMENTS = 5;
const MIN_ID_LENGTH = 2;
const OFF = 'off';

module.exports = {
  extends: 'eslint:recommended',
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: 'module',
  },
  env: {
    es6: true,
  },
  globals: {
    URL: READONLY,
    console: READONLY,
    setInterval: READONLY,
    clearInterval: READONLY,
    setTimeout: READONLY,
    clearTimeout: READONLY,
  },
  rules: {
    // complexity
    complexity: [ERROR, MAX_COMPLEXITY],
    'max-depth': [ERROR, MAX_DEPTH],
    'no-nested-ternary': [ERROR],

    // clarity
    'max-classes-per-file': [ERROR],
    'max-statements-per-line': [ERROR],
    'no-else-return': [ERROR],
    'no-empty-function': [ERROR],
    'no-implicit-coercion': [ERROR],
    'no-lonely-if': [ERROR],
    'no-magic-numbers': [ERROR],
    'no-negated-condition': [ERROR],
    'no-param-reassign': [ERROR],
    'no-shadow': [ERROR],
    'no-unneeded-ternary': [ERROR],
    'symbol-description': [ERROR],

    // functions
    'max-params': [ERROR, MAX_PARAMETERS],
    'max-statements': [ERROR, MAX_STATEMENTS],
    'func-style': [ERROR, 'declaration', {
      allowArrowFunctions: true,
    }],
    'func-names': [ERROR, ALWAYS],
    'arrow-body-style': [ERROR, NEVER],
    'arrow-parens': [ERROR, AS_NEEDED],
    'no-confusing-arrow': [ERROR],

    // verbosity
    'comma-dangle': [ERROR, 'always-multiline'],
    curly: [ERROR],
    'default-case': [ERROR],
    eqeqeq: [ERROR],
    'one-var': [ERROR, NEVER],
    semi: [ERROR],

    // bug guards
    radix: [ERROR],
    'guard-for-in': [ERROR],

    // quotes
    'quote-props': [ERROR, AS_NEEDED],
    quotes: [ERROR, 'single'],

    // naming
    camelcase: [ERROR],
    'id-length': [ERROR, {
      min: MIN_ID_LENGTH,
      exceptions: ['x', 'y'],
    }],
    'new-cap': [ERROR],
    'no-underscore-dangle': [ERROR],

    // opt out
    'no-array-constructor': [ERROR],
    'no-async-promise-executor': [ERROR],
    'no-await-in-loop': [ERROR],
    'no-caller': [ERROR],
    'no-console': [ERROR, {
      allow: [
        'assert',
        'error',
        'info',
        'warn',
      ],
    }],
    'no-duplicate-imports': [ERROR, {
      includeExports: true,
    }],
    'no-eq-null': [ERROR],
    'no-eval': [ERROR],
    'no-extend-native': [ERROR],
    'no-implied-eval': [ERROR],
    'no-inline-comments': [ERROR],
    'no-multi-assign': [ERROR],
    'no-new-object': [ERROR],
    'no-plusplus': [ERROR],
    'no-proto': [ERROR],
    'no-restricted-syntax': [ERROR, {
      selector: 'ExportDefaultDeclaration',
      message: 'Prefer named exports.',
    }],
    'no-throw-literal': [ERROR],
    'no-var': [ERROR],
    'no-void': [ERROR],
    'no-with': [ERROR],
    'prefer-rest-params': [ERROR],
    'prefer-spread': [ERROR],
    'prefer-template': [ERROR],

    // formatting
    'array-bracket-spacing': [ERROR],
    'brace-style': [ERROR],
    'comma-spacing': [ERROR],
    'comma-style': [ERROR],
    'computed-property-spacing': [ERROR],
    'dot-location': [ERROR, 'property'],
    'func-call-spacing': [ERROR],
    indent: [ERROR, INDENT_SIZE],
    'key-spacing': [ERROR],
    'keyword-spacing': [ERROR],
    'line-comment-position': [ERROR, {
      position: 'above',
    }],
    'lines-around-comment': [ERROR, {
      allowArrayStart: true,
      allowBlockStart: true,
      allowClassStart: true,
      allowObjectStart: true,
      beforeLineComment: true,
      beforeBlockComment: true,
    }],
    'lines-between-class-members': [ERROR],
    'max-len': [ERROR, MAX_LINE_LENGTH, {
      ignoreUrls: true,
    }],
    'multiline-comment-style': [ERROR, 'starred-block'],
    'no-multi-spaces': [ERROR],
    'no-multiple-empty-lines': [ERROR, {
      max: MAX_EMPTY_LINES,
    }],
    'no-trailing-spaces': [ERROR],
    'object-property-newline': [ERROR],
    'padded-blocks': [ERROR, NEVER],
    'padding-line-between-statements': [ERROR, {
      blankLine: 'always',
      prev: '*',
      next: 'return',
    }],
    'semi-spacing': [ERROR],
    'semi-style': [ERROR],
    'space-before-function-paren': [ERROR, NEVER],
    'space-in-parens': [ERROR],
    'spaced-comment': [ERROR, ALWAYS, {
      line: {
        markers: [
          '#region',
          '#endregion',
          '/',
        ],
      },
      block: {
        markers: [
          '!',
        ],
      },
    }],
    'switch-colon-spacing': [ERROR],
    'template-tag-spacing': [ERROR],
  },
  overrides: [
    {
      files: [
        '*.test.js',
      ],
      rules: {
        'func-call-spacing': OFF,
        indent: OFF,
        'no-array-constructor': OFF,
        'no-empty-function': OFF,
        'no-magic-numbers': OFF,
        'no-restricted-syntax': OFF,
        'no-unexpected-multiline': OFF,
        'semi-style': OFF,
      },
    },
  ],
};

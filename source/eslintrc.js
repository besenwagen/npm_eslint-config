/* global module */
const ERROR = 'error';
const OFF = 'off';
const READONLY = 'readonly';
const INDENT = 'tab';
const MAX_CALLBACKS = 1;
const MAX_COMPLEXITY = 3;
const MAX_DEPTH = 1;
const MAX_PARAMETERS = 3;
const MAX_STATEMENTS = 7;

module.exports = {
	parserOptions: {
		sourceType: 'module',
	},
	env: {
		es2022: true,
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
		// code style
		'comma-dangle': [ERROR, 'always-multiline'],
		indent: [ERROR, INDENT],
		'no-extra-semi': [ERROR],
		semi: [ERROR],
		// simplicity
		complexity: [ERROR, MAX_COMPLEXITY],
		'max-depth': [ERROR, MAX_DEPTH],
		'max-nested-callbacks': [ERROR, MAX_CALLBACKS],
		'max-params': [ERROR, MAX_PARAMETERS],
		'max-statements': [ERROR, MAX_STATEMENTS],
		// nannying
		'no-delete-var': [ERROR],
		'no-dupe-args': [ERROR],
		'no-global-assign': [ERROR],
		'no-implicit-globals': [ERROR],
		'no-param-reassign': [ERROR],
		'no-redeclare': [ERROR],
		'no-shadow': [ERROR],
		'no-undef': [ERROR],
		'no-unused-vars': [ERROR],
		'no-useless-escape': [ERROR],
		'valid-typeof': [ERROR],
		// ES 2015+
		'constructor-super': [ERROR],
		'no-dupe-class-members': [ERROR],
		'no-unused-private-class-members': [ERROR],
		'prefer-rest-params': [ERROR],
		'prefer-spread': [ERROR],
	},
	overrides: [
		{
			files: [
				'*.test.js',
			],
			rules: {
				'max-statements': [OFF],
				semi: [OFF],
			},
		},
	],
};

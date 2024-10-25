// eslint.config.js
import importPlugin from 'eslint-plugin-import';
import js from '@eslint/js';
import tseslint from "typescript-eslint";

export default [
	js.configs.recommended,
	...tseslint.configs.recommended,
	importPlugin.flatConfigs.recommended,
	{
		files: ['**/*.{ts,tsx}'],
		settings: {
			"import/parsers": {
				"@typescript-eslint/parser": [".ts", ".tsx"],
			},
			"import/resolver": {
				typescript: true,
				node: true,
			},
		},
		rules: {
			/* [...] */
		},
	},
];

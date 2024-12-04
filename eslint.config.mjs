// @ts-check

import eslint from '@eslint/js';
import tseslint from 'typescript-eslint';

export default [
    ...tseslint.config(eslint.configs.recommended, ...tseslint.configs.recommended),
    {
        ignores: ['node_modules/**', 'lib/**/*'],
        rules: {
            '@typescript-eslint/no-unused-vars': [
                'error',
                {
                    args: 'all',
                    argsIgnorePattern: '^_',
                    caughtErrors: 'all',
                    caughtErrorsIgnorePattern: '^_',
                    destructuredArrayIgnorePattern: '^_',
                    varsIgnorePattern: '^_',
                    ignoreRestSiblings: true,
                },
            ],
            '@typescript-eslint/no-explicit-any': 'off',
        },
    },
];

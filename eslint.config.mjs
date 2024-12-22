import path from 'node:path';
import { fileURLToPath } from 'node:url';

import { includeIgnoreFile } from '@eslint/compat';
import pluginJs from '@eslint/js';
import pluginReact from 'eslint-plugin-react';
import pluginReactHooks from 'eslint-plugin-react-hooks';
import simpleImportSort from 'eslint-plugin-simple-import-sort';
import unusedImports from 'eslint-plugin-unused-imports';
import globals from 'globals';
import tseslint from 'typescript-eslint';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const gitignorePath = path.resolve(__dirname, '.gitignore');

/** @type {import('eslint').Linter.Config[]} */
export default [
  includeIgnoreFile(gitignorePath),
  { files: ['**/*.{js,mjs,cjs,ts,jsx,tsx}'] },
  {
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.node,
        ...globals.serviceworker,
      },
    },
    settings: { react: { version: 'detect' } },
  },
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
  pluginReact.configs.flat.recommended,
  {
    rules: {
      'react/forbid-dom-props': [
        'warn',
        {
          forbid: [
            {
              propName: 'style',
              message:
                'CSP 문제로 style prop은 직접 사용할 수 없습니다. tailwind className 혹은 useStyle을 사용하세요.',
            },
          ],
        },
      ],
      'react/forbid-component-props': [
        'warn',
        {
          forbid: [
            {
              propName: 'style',
              message:
                'CSP 문제로 style prop은 직접 사용할 수 없습니다. tailwind className 혹은 useStyle을 사용하세요.',
            },
          ],
        },
      ],
    },
  },
  pluginReact.configs.flat['jsx-runtime'],
  {
    plugins: { 'react-hooks': pluginReactHooks, 'simple-import-sort': simpleImportSort },
    rules: {
      ...pluginReactHooks.configs.recommended.rules,
      'simple-import-sort/imports': 'error',
      'simple-import-sort/exports': 'error',
    },
  },
  {
    rules: {
      'no-restricted-imports': [
        'error',
        {
          name: 'next/link',
          message: 'Please import from `@/i18n/routing` instead.',
        },
        {
          name: 'next/navigation',
          importNames: ['redirect', 'permanentRedirect', 'useRouter', 'usePathname'],
          message: 'Please import from `@/i18n/routing` instead.',
        },
        {
          name: 'next/image',
          importNames: ['default'],
          message: 'CSP 문제로 @/components/common/image를 사용해주세요.',
        },
      ],
    },
  },
  {
    plugins: {
      'unused-imports': unusedImports,
    },
    rules: {
      'unused-imports/no-unused-imports': 'error',
    },
  },
];

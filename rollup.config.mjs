/*
 * @license
 * Copyright (c) 2024 MatteuSan
 * SPDX-License-Identifier: MIT
 */

import resolve from '@rollup/plugin-node-resolve';
import babel from '@rollup/plugin-babel';
import { terser } from 'rollup-plugin-terser';
import multiEntry from '@rollup/plugin-multi-entry';

/** @type {import('rollup').RollupOptions} */
export default {
  input: [
    'packages/himig-components/button/ms-button.js',
    // 'packages/himig-components/form-field/ms-form-field.js'
  ],
  output: {
    dir: 'packages/himig-components',
    format: 'esm',
  },
  plugins: [
    resolve(),
    babel({ babelHelpers: 'bundled' }),
    terser()
  ]
};
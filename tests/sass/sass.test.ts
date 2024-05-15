/*
 * @license
 * Copyright (c) 2024 MatteuSan
 * SPDX-License-Identifier: MIT
 */

const path = require('node:path');
const sassTest = require('sass-true');

const filePath = path.join(__dirname, './main.test.scss');
sassTest.runSass({ describe, it }, filePath, {
  loadPaths: ['node_modules'],
});
/*
 * @license
 * Copyright (c) 2024 MatteuSan
 * SPDX-License-Identifier: MIT
 */

const path = require('node:path');
const sassTest = require('sass-true');
const scss = require('sass');

const filePath = path.join(__dirname, './main.test.scss');
// @ts-ignore
sassTest.runSass( { describe, it }, filePath, {
  importers: [new scss.NodePackageImporter()],
  loadPath: ['node_modules']
});
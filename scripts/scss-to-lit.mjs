/*
 * @license
 * Copyright (c) 2024 MatteuSan
 * SPDX-License-Identifier: MIT
 */

import * as fs from "node:fs";
import * as path from "node:path";

/**
 * @param {string} startPath
 * @param {RegExp} filter
 * @param {(filename: string) => void} callback
 * @returns {void}
 */
function fromDir(startPath, filter, callback) {
  if (!fs.existsSync(startPath)) {
    console.log("no dir ", startPath);
    return;
  }

  const files = fs.readdirSync(startPath);
  files.forEach(file => {
    const filename = path.join(startPath, file);
    const stat = fs.lstatSync(filename);
    if (stat.isDirectory()) {
      fromDir(filename, filter, callback);
    } else if (filter.test(filename)) callback(filename);
  });
}

fromDir("packages/himig-web", /\.css/, (filename) => {
  const cssContent = fs.readFileSync(filename, {encoding: 'utf-8'}).replace(/\/\*#\ sourceMappingURL=[^\*]+ \*\//, '');
  const tsFile = filename.replace('.css', '.ts');
    fs.writeFileSync(tsFile, `/**
 * @license
 * Copyright ${ new Date().getFullYear() } MatteuSan
 * SPDX-License-Identifier: MIT
 */
import { css } from 'lit';
export const styles = css\`${cssContent}\`;
`);
});
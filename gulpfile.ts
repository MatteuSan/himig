/*
 * @license
 * Copyright (c) 2025 MatteuSan
 * SPDX-License-Identifier: MIT
 */

const { src, dest, series } = require('gulp');
const sassBase = require('sass');
const sass = require('gulp-sass')(sassBase);

const testSass = () => {
  return src('tests/sass/with-html.test.scss')
    .pipe(sass({
      loadPath: ['node_modules'],
      importers: [sassBase.NodePackageImporter()],
      verbose: true,
    }).on('error', sass.logError))
    .pipe(dest('tests/sass'));
}

exports.default = series(
  testSass
);
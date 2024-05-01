/*
 * @license
 * Copyright (c) 2024 MatteuSan
 * SPDX-License-Identifier: MIT
 */

const { src, dest, series } = require('gulp');
const sass = require('gulp-sass')(require('sass'));

const buildSass = () => {
  return src('packages/himig-web/**/*.scss')
    .pipe(sass({
      includePaths: ['node_modules']
    }).on('error', sass.logError))
    .pipe(dest('packages/himig-web'));
}

exports.default = series(
  buildSass
);
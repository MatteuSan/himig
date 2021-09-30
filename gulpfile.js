/*
 *
 * Copyright (c) 2021 GrowStocks
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */

const {src, dest, watch, series} = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const postcss = require('gulp-postcss');
const cssnano = require('cssnano');

/*const terser = require('gulp-terser');
const typescript = require('gulp-typescript');*/

function sassTaskDev() {
    return src(['src/**/*.scss', 'test/**/*.scss', '!src/**/*.test.scss'], {sourcemaps: true})
        .pipe(sass().on('error', sass.logError))
        .pipe(dest('./src', {sourcemaps: '.'}));
}

function sassTaskProd() {
    return src('src/main.scss', {sourcemaps: true})
        .pipe(sass().on('error', sass.logError))
        .pipe(postcss([ cssnano ]))
        .pipe(dest('./src', {sourcemaps: '.'}));
}

/*function tsTask() {
    return src(['test/scripts/!**!/!*.ts', 'src/!**!/!*.ts'])
        .pipe(typescript())
        .pipe(terser())
        .pipe(dest('test/scripts'));
}*/

function watchTask() {
    watch(['src/**/*.scss', 'test/**/*.scss', '!src/**/*.test.scss'], sassTask());
    // watch('test/scripts/**/*.ts', tsTask());
}

exports.default = series(
    sassTaskDev,
    sassTaskProd
    // tsTask, // tsTask() disabled on default until we find a fix for this [DEV]
);
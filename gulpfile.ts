const { src, dest, series } = require('gulp');
const sass = require('gulp-sass')(require('sass'));

const buildSass = () => {
  return src('packages/gaia/**/*.scss')
    .pipe(sass({
      includePaths: ['node_modules']
    }).on('error', sass.logError))
    .pipe(dest('packages/gaia'));
}

const testSass = () => {
  return src('test/**/*.scss')
    .pipe(sass({
      includePaths: ['node_modules']
    }).on('error', sass.logError))
    .pipe(dest('test'));
}

exports.default = series(
  buildSass,
  testSass
);
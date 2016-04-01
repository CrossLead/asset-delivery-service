require('babel-register');
require('babel-polyfill');

var src = 'src/**/*.js',
  tests = 'test/**/*.js',
  gulp = require('gulp'),
  sourcemaps = require('gulp-sourcemaps'),
  babel = require('gulp-babel'),
  mocha = require('gulp-mocha');

gulp.task('build', function () {
  return gulp.src(src)
    .pipe(sourcemaps.init())
    .pipe(babel())
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest('.'));
});
 
gulp.task('test', ['build'], function () {
    return gulp.src(tests, {read: false})
      .pipe(mocha({
        reporter: 'spec'
      }));
});

gulp.task('tdd', ['test'], function () {
  return gulp.watch([tests, src], ['test']);
});

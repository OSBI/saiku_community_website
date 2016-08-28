'use strict';

// Necessary Plugins
var gulp    = require('gulp');
var plumber = require('gulp-plumber');
var paths   = require('../paths');

// Call Copy files
module.exports = gulp.task('copy-files', function() {
  return gulp.src(paths.source.files.copy)
    .pipe(plumber())
    .pipe(gulp.dest(paths.build.root));
});

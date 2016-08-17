'use strict';

// Necessary Plugins
var gulp         = require('gulp');
var plumber      = require('gulp-plumber');
var poststylus   = require('poststylus');
var autoprefixer = require('autoprefixer');
var csscomb      = require('gulp-csscomb');
var paths        = require('../paths');

// Call Stylus
module.exports = gulp.task('css', function() {
  var processors = [
    autoprefixer
  ];
  return gulp.src(paths.source.files.css)
    .pipe(plumber())
    .pipe(poststylus(processors))
    .pipe(csscomb())
    .pipe(gulp.dest(paths.build.css));
});

'use strict';

// Necessary Plugins
var gulp         = require('gulp');
var plumber      = require('gulp-plumber');
var stylus       = require('gulp-stylus');
var postcss      = require('gulp-postcss');
var autoprefixer = require('autoprefixer');
var mqpacker     = require('css-mqpacker');
var csswring     = require('csswring');
var csscomb      = require('gulp-csscomb');
var paths        = require('../paths');

// Call Stylus
module.exports = gulp.task('stylus', function() {
  var processors = [
    autoprefixer({ browsers: ['last 3 versions'] }),
    mqpacker,
    csswring
  ];
  return gulp.src(paths.source.files.styl)
    .pipe(plumber())
    .pipe(stylus())
    .pipe(csscomb())
    .pipe(postcss(processors))
    .pipe(gulp.dest(paths.build.css));
});

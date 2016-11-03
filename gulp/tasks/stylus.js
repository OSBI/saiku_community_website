/**
 *   Copyright 2016 OSBI Ltd
 *
 *   Licensed under the Apache License, Version 2.0 (the "License");
 *   you may not use this file except in compliance with the License.
 *   You may obtain a copy of the License at
 *
 *       http://www.apache.org/licenses/LICENSE-2.0
 *
 *   Unless required by applicable law or agreed to in writing, software
 *   distributed under the License is distributed on an "AS IS" BASIS,
 *   WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 *   See the License for the specific language governing permissions and
 *   limitations under the License.
 */

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

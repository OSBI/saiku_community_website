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
const gulp         = require('gulp');
const plumber      = require('gulp-plumber');
const stylus       = require('gulp-stylus');
const postcss      = require('gulp-postcss');
const autoprefixer = require('autoprefixer');
const mqpacker     = require('css-mqpacker');
const csswring     = require('csswring');
const csscomb      = require('gulp-csscomb');
const paths        = require('../paths');

// Call Stylus
module.exports = gulp.task('stylus', () => {
  const processors = [
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

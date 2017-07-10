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
var gulp    = require('gulp');
var plumber = require('gulp-plumber');
var jade    = require('gulp-jade');
var data    = require('../../src/data/data');
var paths   = require('../paths');

// Call Jade to compile templates
module.exports = gulp.task('jade', () => {
  return gulp.src(paths.source.files.jade)
    .pipe(plumber())
    .pipe(jade({
      pretty: false,
      locals: {
        data: data
      }
    }))
    .pipe(gulp.dest(paths.build.html));
});

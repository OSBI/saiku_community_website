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
var bower   = require('gulp-bower');
var paths   = require('../paths');

// Call Bower
gulp.task('bower', function() {
  return bower()
    .pipe(gulp.dest(paths.source.bowerDir));
});

// Call Font Awesome
gulp.task('fontAwesome', ['bower'], function() {
  gulp.src(paths.source.bowerDir + '/font-awesome/css/font-awesome.min.css')
    .pipe(plumber())
    .pipe(gulp.dest(paths.build.css));
  gulp.src(paths.source.bowerDir + '/font-awesome/fonts/**.*')
    .pipe(plumber())
    .pipe(gulp.dest(paths.build.fonts));
});

// Call Classie
gulp.task('classie', ['bower'], function() {
  gulp.src(paths.source.bowerDir + '/classie/classie.js')
    .pipe(plumber())
    .pipe(gulp.dest(paths.build.js));
});

// Call Bower Install
module.exports = gulp.task('bower-install', ['bower', 'fontAwesome', 'classie']);

'use strict';

// Necessary Plugins
var gulp = require('gulp');

// Default task
module.exports = gulp.task('default', ['js', 'jade', 'stylus', 'imagemin',
  'copy-files', 'bower-install', 'watch', 'browser-sync']);

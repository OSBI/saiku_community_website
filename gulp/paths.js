'use strict';

module.exports = {
  source: {
    bowerDir: './bower_components',
    templates: './src/templates/**/*.jade',
    js: './src/js/**/*.js',
    styl: './src/styl/**/*.styl',
    img: './src/images/**/*',
    files: {
      jade: './src/templates/index.jade',
      styl: './src/styl/main.styl'
    }
  },

  browserSync: {
    html: './build/**/*.html',
    css: './build/css/**/*.css',
    js: './build/js/**/*.js',
    img: './build/images/**/*'
  },

  build: {
    html: './build/',
    css: './build/css',
    js: './build/js',
    img: './build/images',
    fonts: './build/fonts'
  }
};

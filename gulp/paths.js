/**
 *   Copyright 2011 - 2017 OSBI Ltd
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

module.exports = {
  source: {
    nodeDir: './node_modules',
    templates: './src/templates/**/*.jade',
    js: './src/js/**/*.js',
    styl: './src/styl/**/*.styl',
    img: './src/images/**/*',
    favicon: './src/images/favicon.png',
    files: {
      copy: ['./src/humans.txt'],
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
    root: './build/',
    html: './build/',
    css: './build/css',
    js: './build/js',
    img: './build/images',
    fonts: './build/fonts'
  }
};

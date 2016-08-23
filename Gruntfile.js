module.exports = function(grunt) {
    'use strict';

    grunt.initConfig({
        // Watch definitions
        watch: {
            reload: {
                files: ['./css/main.css', './index.html', './css/main.js'],
                options: {
                    livereload: {
                        port: 35729
                    }
                }
            }
        }
    });

    // These plugins provide necessary tasks
    grunt.loadNpmTasks('grunt-contrib-watch');

    // By default, lint and run all tests
    grunt.registerTask('default', ['watch']);
};

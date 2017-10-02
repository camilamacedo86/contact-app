module.exports = function(grunt) {
  'use strict';
  require('load-grunt-tasks')(grunt);

  grunt.initConfig({
    watch: {
      js: {
        files: ['Gruntfile.js', 'www/app.js', 'www/**/*.js','www/**/**/*.js'],
        options: {
          livereload: true
        }
      },
      html: {
        files: ['www/**'],
        options: {
          livereload: true
        }
      }
    },
    eslint: {
      options: {
        configFile: '.eslintrc.json'
      },
      target: ['www/js/**/*.js', 'www/js/**/**/*.js']
    },
  });

  //TODO: Add test and its coverage
  //TODO: Add browserify

  // Load Tasks
  grunt.loadNpmTasks('grunt-eslint');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-watch');
  // Tasks
  grunt.registerTask('test', ['eslint']);
  grunt.registerTask('default');

};
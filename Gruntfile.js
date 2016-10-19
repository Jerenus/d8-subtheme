'use strict';

module.exports = function (grunt) {
  grunt.initConfig({
    watch: {
      options: {
        livereload: true
      },
      sass: {
        files: ['sass/{,**/}*.{scss,sass}'],
        tasks: ['compass:dev'],
        options: {
          livereload: false
        }
      },
      images: {
        files: ['images/**']
      },
      css: {
        files: ['css/{,**/}*.css']
      },
      js: {
        files: ['js/{,**/}*.js', '!js/{,**/}*.min.js'],
        tasks: ['jshint', 'uglify:dev']
      }
    },
    compass: {
      dev: {
        options: {
          environment: 'development',
          sassDir: 'sass',
          cssDir: 'css'
        }
      },
      dist: {
        options: {
          environment: 'production',
          sassDir: 'sass',
          cssDir: 'css'
        }
      }
    },
    sass_globbing: {
      target: {
        files: {
          'sass/_components.scss': 'sass/components/**/*.scss',
          'sass/_abstractions.scss': 'sass/abstractions/**/*.scss',
          'sass/_base.scss': 'sass/base/**/*.scss',
          'sass/_variables.scss': 'sass/variables/**/*.scss'
        },
        options: {
          useSingleQuoates: false
        }
      }
    }
  });

  grunt.loadNpmTasks('grunt-sass');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-compass');
  grunt.loadNpmTasks('grunt-sass-globbing');
  grunt.registerTask('default', ['sass_globbing', 'compass', 'watch']);
};
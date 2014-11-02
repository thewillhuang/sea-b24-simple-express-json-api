module.exports = function(grunt) {
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-jscs');
  grunt.loadNpmTasks('grunt-simple-mocha');

// TODO: add in jshint, jscs, and mocha config options below
  // reference the READMEs for grunt-contrib-jshint, grunt-contrib-jscs, and
  // grunt-simple-mocha
  grunt.initConfig({
    jshint: {
      all: ["*/*.js"]
    },
    simplemocha: {
      src: ['test/**/*.js']
    },
    jscs: {
      all: {
        options: {
          "preset": "google"
        },
        files: {
          src: [ "server.js" ]
        }
      }
    }
  });
  grunt.registerTask('test', ['jshint', 'simplemocha', 'jscs']);
  grunt.registerTask('default', ['test']);
};


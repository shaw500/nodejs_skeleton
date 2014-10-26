module.exports = function(grunt) {

  grunt.loadNpmTasks('grunt-express-server');
  grunt.loadNpmTasks('grunt-mocha-test');
  grunt.loadNpmTasks('grunt-node-inspector');

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    express: {
      options: {
        script: './server.js',
        background: false
      },
      dev: {
        options: {
          node_env: 'dev'
        }
      },
      prod: {
        options: {
          node_env: 'prod'
        }
      },
      testing: {
        options: {
          node_env: 'testing',
          background: true
        }
      }
    },

    mochaTest: {
      test: {
        src: ['test/**/*.js']
      }
    }

  });

  grunt.registerTask('run', ['express:dev', 'mochaTest']);
  grunt.registerTask('debug', ['node-inspector']);
  grunt.registerTask('test', ['express:testing', 'mochaTest']);

};

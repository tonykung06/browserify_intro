'use strict';

module.exports = function(grunt) {
    grunt.initConfig({
        browserify: {
            app: {
                src: 'src/js/app.js',
                dest: 'dist/js/app.bundle.js',
                options: {
                    browserifyOptions: {
                        debug: true
                    }
                }
            }
        },
        watch: {
            app: {
                files: ['src/js/**/*.js'],
                tasks: ['browserify'],
                options: {
                    livereload: true //will start another server to serve livereload.js, build web-socket connection with browser clients and notify corresponding browser client to refresh
                }
            }
        },
        connect: {
            app: {
                options: {
                    port: 9001,
                    base: './dist/',
                    //middleware that is executed to inject livereload script to make web-socket connection with livereload server started by watch module possible
                    middleware: function(connect, options, middlewares) {
                        middlewares.unshift(require('connect-livereload')()); //need to npm install --save-dev connect-livereload

                        return middlewares;
                    }
                }
            }
        }
    });

    grunt.loadNpmTasks('grunt-browserify');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-connect');

    grunt.registerTask('default', ['browserify']);
    grunt.registerTask('serve', ['browserify:app', 'connect:app', 'watch:app']);

};

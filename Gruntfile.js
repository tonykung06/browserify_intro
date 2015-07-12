'use strict';

module.exports = function(grunt) {
    grunt.initConfig({
        browserify: {
            app: {
                src: 'src/js/app.js',
                dest: 'dest/js/app.bundle.js',
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
                tasks: ['browserify']
            }
        },
        connect: {
            app: {
                options: {
                    port: 9001,
                    base: './dest/'
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

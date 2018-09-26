'use strict';

module.exports = function(grunt) {
    grunt.initConfig({

        connect: {
            options: {
                port: 8080,
                hostname: 'localhost'
            },
            src: {},
            dist: {}
        },

        openui5_connect: {
            src: {
                options: {
                    appresources: 'webapp'
                }
            },
            options: {
                resources: 'resources'
            }
        },

        cors: {
            origin: '*'
        }
    });
    grunt.loadNpmTasks('grunt-contrib-connect');
    grunt.loadNpmTasks('grunt-openui5');

    grunt.registerTask('serve', function(target) {
        grunt.task.run('openui5_connect:' + (target || 'src') + ':keepalive');
    });
}
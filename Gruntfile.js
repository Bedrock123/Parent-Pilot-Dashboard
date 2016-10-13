module.exports = function(grunt) {
    grunt.initConfig({
            concat: {
                js: {
                    src: [
                        'js/classie.js',
                        'js/pathLoader.js',
                        'js/main.js',
                        'js/scrollprogress.js',
                        'js/confetti.js',
                        'js/masonry.js',
                        'js/typed.js',
                    ],
                    dest: 'build/js/scripts.js',
                },
                css: {
                    src: [
                        'css/normalize.css',
                        'css/demo.css',
                        'css/effect2.css',
                        'css/custom.css',
                    ],
                    dest: 'build/css/styles.css',
                },
            },
            uglify: {
                my_target: {
                    files: {
                        'build/js/scripts.min.js': ['build/js/scripts.js'],
                        'build/js/modernizr.custom.min.js': ['js/modernizr.custom.js']
                    }
                }
            },
            watch: {
                js: {
                    files: ['js/**/*.js'],
                    tasks: ['concat', 'uglify'],
                },
                css: {
                    files: ['css/**/*.css'],
                    tasks: ['concat', 'cssmin'],
                },
            },
            cssmin: {
                target: {
                    files: {
                        'build/css/styles.min.css': ['build/css/styles.css'],
                        'build/css/lite-custom.min.css': ['css/lite-custom.css']
                    }
                }
            },
        }),
        grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.registerTask('default', ['concat', 'cssmin', 'uglify', 'watch']);
    grunt.loadNpmTasks('grunt-contrib-cssmin');

};
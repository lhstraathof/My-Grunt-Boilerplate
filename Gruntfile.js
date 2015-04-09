
module.exports = function(grunt) {
	require('jit-grunt')(grunt);

	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),

		/*
			JavaScript
		*/
		jshint: {
			files: ['source/js/*.js']
		},
		concat: {
			options: {
				separator: ';'
			},
			js: {
				src: ['source/js/vendor/*.js', '<%= jshint.files %>'],
				dest: 'js/all.js'
			}
		},
		uglify: {
			js: {
				files: {
					'js/all.min.js': ['<%= concat.js.dest %>']
				}
			}
		},

		/*
			SASS
		*/
		sass_directory_import: {
			files: {
				src: ['source/css/**/_all.scss']
			}
		},
		sass: {
			global: {
				options: {
					style: 'expanded'
				},
				files: {
					'css/global.css': 'source/css/global.scss'
				}
			}
		},
		cssmin: {
			combine: {
				files: {
					'css/global.min.css': ['css/global.css']
				}
			}
		},

		/*
			Images
		*/
		imagemin: {
			dynamic: {
				files: [{
					expand: true,
					src: 'source/img/**/*.{png,jpg,gif,svg}',
					dest: 'img/'
				}]
			}
		},
		copy: {
			all: {
				expand: true,
				cwd: 'source/img',
				src: '**/*',
				dest: 'img/'
			},
			nonImages: {
				expand: true,
				cwd: 'source/img',
				src: ['**/*', '!**/*.{png,jpg,gif,svg}'],
				dest: 'img/'
			}
		},


		/*
			Local testing
		*/
		browserSync: {
			sync: {
				bsFiles: {
					src: ['css/**', '*.html', 'js/**', 'img/**']
				}
			},
			nosync: {
				bsFiles: {
					src: []
				}
			},
			options: {
				server: {
					baseDir: "./"
				},
				ports: { // Start de server op de eerst beschikbare poort:
				    min: 8000,
				    max: 8100
				},
				ghostMode: { // Stuur de volgende events ook door naar andere verbonden apparaten:
					clicks: true,
					scroll: true,
					links: true,
					forms: true
				},
				watchTask: true
			}
		},
		weinre: {
			dev: {
				options: {
					httpPort: 8082,
					boundHost: 'localhost'
				}
			}
		},
		

		/*
			Task runners
		*/
		watch: {
			jshint: {
				files: ['<%= jshint.files %>'],
				tasks: ['jshint'],
				options: {
					spawn: false
				}
			},
			concat: {
				files: ['<%= concat.js.src %>'],
				tasks: ['concat'],
				options: {
					spawn: false
				}
			},
			concatAndUglify: {
				files: ['<%= concat.js.src %>'],
				tasks: ['concat', 'uglify'],
				options: {
					spawn: false
				}
			},
			sass: {
				files: ['source/css/**/*.scss'],
				tasks: ['sass_directory_import', 'sass'],
				options: {
					spawn: false
				}
			},
			sassAndMinify: {
				files: ['source/css/**/*.scss'],
				tasks: ['sass_directory_import', 'sass', 'cssmin'],
				options: {
					spawn: false
				}
			},
			imagemin: {
				files: ['source/img/**/*'],
				tasks: ['imagemin', 'copy:nonImages'],
				options: {
					spawn: false
				}
			},
			copy: {
				files: ['source/img/**/*'],
				tasks: ['copy:all'],
				options: {
					spawn: false
				}
			},
		},
		concurrent: {
			options: {
				logConcurrentOutput: true
			},
			'watch-js-dev': {
				tasks: ['watch:jshint', 'watch:concat']
			},
			'watch-js': {
				tasks: ['watch:jshint', 'watch:concatAndUglify']
			},
			'watch-all-dev': {
				tasks: ['watch-js-dev', 'watch-css-dev', 'watch-img-dev']
			},
			'watch-all': {
				tasks: ['watch-js', 'watch-css', 'watch-img']
			},
			'local-dev2': {
				tasks: ['local', 'watch-all-dev']
			}
		}
	});
	

	grunt.loadNpmTasks('grunt-notify');


	grunt.registerTask('js-dev', 		['jshint', 'concat']);
	grunt.registerTask('js', 			['js-dev', 'uglify']);
	grunt.registerTask('watch-js-dev', 	['concurrent:watch-js-dev']); 
	grunt.registerTask('watch-js', 		['concurrent:watch-js']);   

	grunt.registerTask('css-dev', 		['sass_directory_import', 'sass']);
	grunt.registerTask('css', 			['css-dev', 'cssmin']);
	grunt.registerTask('watch-css-dev', ['watch:sass']); 
	grunt.registerTask('watch-css', 	['watch:sassAndMinify']); 

	grunt.registerTask('img-dev', 		['copy:all']);
	grunt.registerTask('img', 			['imagemin', 'copy:nonImages']);
	grunt.registerTask('watch-img-dev', ['watch:copy']); 
	grunt.registerTask('watch-img', 	['watch:imagemin']); 
	
	grunt.registerTask('all-dev', 		['js-dev', 'css-dev', 'img-dev']);
	grunt.registerTask('all', 			['js', 'css', 'img']);
	grunt.registerTask('watch-all-dev', ['concurrent:watch-all-dev']);
	grunt.registerTask('watch-all', 	['concurrent:watch-all']);

	grunt.registerTask('local', 		['browserSync:sync', 'weinre']);
	grunt.registerTask('local-nosync', 	['browserSync:nosync', 'weinre']);
	grunt.registerTask('local-dev', 	['concurrent:local-dev2']);

	grunt.registerTask('dev', 			['all-dev']);
	grunt.registerTask('default', 		['all']);

};
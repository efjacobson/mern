(function() {
	'use strict';
	
	var gulp = require('gulp'),
		nodemon = require('gulp-nodemon'),
		jshint = require('gulp-jshint'),
		_paths = ['server/**/*.js', 'client/js/*.js'];
		
	//register nodemon task
	gulp.task('nodemon', function() {
		nodemon({
			script: 'server/app.js',
			env: {
				'NODE_ENV': 'development'
			}
		})
			.on('restart');
	});
	
	//lint js files
	gulp.task('lint', function() {
		gulp.src(_paths)
			.pipe(jshint())
			.pipe(jshint.reporter('default'));
	});
	
	//default task
	gulp.task('default', ['lint', 'nodemon']);
}());

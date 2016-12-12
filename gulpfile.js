var gulp = require('gulp');

// Include Our Plugins
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var rename = require('gulp-rename');
var less = require('gulp-less');

var styleSources = [
	'./less/*.less',
	'./less/pages/*.less',
	'./less/sections/*.less'
];

// Compile and minify CSS
gulp.task('styles', function() {
  return gulp.src('./less/style.less')
  .pipe(less())
  .pipe(rename('style.css'))
  .pipe(gulp.dest('./app/css'));
});

// Watch Files For Changes
gulp.task('watch', function() {
  gulp.watch(styleSources, ['styles']);
});

// Default Task
gulp.task('default', ['styles', 'watch']);

var gulp = require('gulp');
var sync = require('gulp-sync')(gulp);
var opener = require('opener');
var livereload = require('gulp-livereload');
var requireDir = require('require-dir');
var tasks = requireDir('gulp', {recurse: true});
var util = require('gulp-util');
var uglify = require('gulp-uglify');
var htmlmin       = require('gulp-htmlmin');


gulp.task('express', function() {
  var express = require('express');
  var app = express();
  app.use(require('connect-livereload')({port: 35729}));
  app.use(express.static(__dirname));
  app.listen(4000, '0.0.0.0');
  opener('http://localhost:4000');
});

gulp.task('watcher', function() {
  gulp.src('index.html')
    .pipe(livereload());
  /*gulp.src('*.js')
    .pipe(livereload());  */
});

gulp.task('watch', function() {

  gulp.watch('*.html',  {interval: 500 }, ['watcher']);
  //gulp.watch('**/*.js', {interval: 500 }, ['watcher']);
  //gulp.watch('**/*.html', {interval: 500 }, ['watcher']);
  //gulp.watch('**/*.js', {interval: 500 }, ['watcher']);
  livereload.listen();
});


gulp.task('default', ['watch','express'], function() {

});



gulp.task('dist', sync.sync(['cleanBuild', 'skitter-assets', ['dist-github-page', 'dist-skitter']]), function(){

});


/*gulp.task('distBower', ['cleanBuild'], function (callback) {
    return gulp.src('example/index.html')
        .pipe(useref())
        .pipe(gulpIf('*.js', uglify()))
        .pipe(gulp.dest('dist'))
});*/

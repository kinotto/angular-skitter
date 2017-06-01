var gulp = require('gulp');
var usemin = require('gulp-usemin');
var uglify = require('gulp-uglify');
var minifyHtml = require('gulp-minify-html');
var minifyCss = require('gulp-minify-css');
var rev = require('gulp-rev');
var config = require('./config');
var rename = require("gulp-rename");
var del = require('del');
var useref        = require('gulp-useref');
var gulpIf        = require('gulp-if');

gulp.task('dist-github-page', function () {
    return gulp.src(config.src.githubPage)
      .pipe(useref())
      //.pipe(gulpIf('*.js', uglify()))
      .pipe(gulp.dest(config.dist.githubPage));
});

gulp.task('dist-skitter', function() {
  return gulp.src(config.src.lib)
    .pipe(uglify())
    .pipe(rename({ suffix: '.min' }))
    .pipe(gulp.dest(config.dist.app));
});

gulp.task('cleanBuild', function(cb){
  return del([config.dist.app], cb);
})

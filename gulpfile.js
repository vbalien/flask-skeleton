'use strict';
var gulp = require('gulp')
var sass = require('gulp-sass');
var ts = require('gulp-typescript');

var src_dir = './app/src';
var static_dir = './app/static';

gulp.task('sass', function() {
    return gulp.src(src_dir + '/sass/**/*.scss')
    .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
    .pipe(gulp.dest(static_dir + '/css'));
});

var tsProject = ts.createProject('tsconfig.json');
gulp.task('typescript', function() {
    return gulp.src(src_dir + '/ts/**/*.ts')
    .pipe(ts(tsProject))
    .pipe(gulp.dest(static_dir + '/js'));
});

gulp.task('watch', function () {
    gulp.watch(src_dir + '/sass/**/*.scss', ['sass']);
    gulp.watch(src_dir + '/ts/**/*.ts', ['typescript']);
});

gulp.task('default', ['sass', 'typescript']);

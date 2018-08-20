'use strict';

const gulp = require('gulp');
const rename = require("gulp-rename");
const uglify = require('gulp-uglify-es').default;
const babel = require('gulp-babel');
const sass = require('gulp-sass');
const autoprefixer = require('gulp-autoprefixer');
const cssnano = require('gulp-cssnano');
const watch = require('gulp-watch');
const browserSync = require('browser-sync').create();
const gutil = require('gulp-util');
const gplumber = require('gulp-plumber');

let errorHandler = () => {
  return gplumber(function(error){
    var msg = error.codeFrame.replace(/\n/g, '\n    ');
    gutil.log('|- ' + gutil.colors.bgRed.bold('Build Error in ' + error.plugin));
    gutil.log('|- ' + gutil.colors.bgRed.bold(error.message));
    gutil.log('|- ' + gutil.colors.bgRed('>>>'));
    gutil.log('|\n    ' + msg + '\n           |');
    gutil.log('|- ' + gutil.colors.bgRed('<<<'));
  });
};

// JS Compilation
gulp.task('jsCompile', () => {
  gulp.src('src/js/*.js')
    .pipe(errorHandler())
    .pipe(watch('src/js/*.js'))
    .pipe(babel({
      presets: ['env']
    }))
    .pipe(gulp.dest('js'))
    .pipe(browserSync.stream())
});

// .pipe(rename({
//   suffix: '.min'
// }))
// .pipe(uglify())

// SASS Compilation
gulp.task('sassCompile', () =>  {
  gulp.src(['src/scss/*.scss', '!src/scss/_components/*'])
    .pipe(watch('src/scss/*.scss'))
    .pipe(sass().on('error', sass.logError))
    .pipe(autoprefixer({
        browsers: ['last 16 versions'],
        cascade: false
    }))
    .pipe(cssnano())
		.pipe(rename({
			suffix: '.min'
		}))
    .pipe(gulp.dest('css'))
    .pipe(browserSync.stream())
});

// Start All Comands
gulp.task('build', ['jsCompile', 'sassCompile']);

// Gulp Watching
gulp.task('watch', () => {
  gulp.watch('src/js/*.js', ['jsCompile']);
  gulp.watch('src/scss/*.scss', ['sassCompile']);
});

gulp.task('default', ['build'], () => {
  browserSync.init({
    server: {
      baseDir: "./"
    },
    scrollProportionally: true,
    notify: false,
    open: "local"
  })
  gulp.watch('src/js/*.js', ['jsCompile']);
  gulp.watch('src/scss/*.scss', ['sassCompile']);
  gulp.watch('*.html').on('change', browserSync.reload);
});

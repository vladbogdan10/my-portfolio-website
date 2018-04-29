var gulp = require('gulp'),
    sass = require('gulp-sass'),
    browserSync = require('browser-sync').create(),
    sourcemaps = require('gulp-sourcemaps'),
    autoprefixer = require('gulp-autoprefixer');

var input = './sass/**/*.scss',
    output = './public/assets/css';

var sassOptions = {
  errLogToConsole: true,
  outputStyle: 'expanded'
};

var autoprefixerOptions = {
  browsers: ['last 2 versions']
};

// Compile sass into CSS & auto-inject into browsers
gulp.task('sass', function () {
  return gulp.src(input)
  .pipe(sourcemaps.init())
  .pipe(sass(sassOptions).on('error', sass.logError))
  // .pipe(autoprefixer(autoprefixerOptions))
  .pipe(sourcemaps.write('../../../maps'))
  .pipe(gulp.dest(output))
  .pipe(browserSync.stream());
});

// Static Server + watching scss/html files
gulp.task('serve', ['sass'], function () {
  browserSync.init({
    server: {
      baseDir: "./public"
    }
  });
  
  gulp.watch(input, ['sass']);
  gulp.watch("./public/*.html").on('change', browserSync.reload);
});

gulp.task('prod', function () {
  return gulp
    .src(input)
    .pipe(sass({ outputStyle: 'compressed' }))
    .pipe(autoprefixer(autoprefixerOptions))
    .pipe(gulp.dest(output));
});

gulp.task('default', ['serve']);
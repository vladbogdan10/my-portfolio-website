var gulp      = require('gulp'),
  browserSync = require('browser-sync').create(),
  sass        = require('gulp-sass');

// Static Server + watching scss/html files
gulp.task('serve', ['sass'], function () {
  browserSync.init({
    server: {
      baseDir: "./"
    }
  });

  gulp.watch("./sass/**/*.scss", ['sass']);
  gulp.watch("./*.html").on('change', browserSync.reload);
});

// Compile sass into CSS & auto-inject into browsers
gulp.task('sass', function () {
  return gulp.src('./sass/**/*.scss')
    .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
    .pipe(gulp.dest('./'))
    .pipe(browserSync.stream());
});

gulp.task('default', ['serve']);
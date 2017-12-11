var gulp = require('gulp');
var uglify = require('gulp-uglify');
var autoprefixer = require('gulp-autoprefixer');
var browserSync = require('browser-sync');

gulp.task('minify', function() {
  gulp.src('js/main.js')
  .pipe(uglify())
  .pipe(gulp.dest('build'));
});

gulp.task('processCSS', function() {
  gulp.src('styles/main.css')
  .pipe(autoprefixer({
      browsers: ['last 2 versions'],
      cascade: false
  }))
  .pipe(gulp.dest('build'))
});

gulp.task('default', ['serve']);

gulp.task('watch', function() {
  gulp.watch('styles/*.css', ['processCSS']);
});

gulp.task('serve', ['processCSS'], function() {
  browserSync.init({
    server: '.',
    port: 3000
  });
  gulp.watch('styles/*.css', ['processCSS']).on('change', browserSync.reload);
  gulp.watch('*.html').on('change', browserSync.reload);
});

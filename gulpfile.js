var gulp = require('gulp');
var sass = require('gulp-sass');
var watch = require('gulp-watch');


//obserwuje i zapisuje zmiany w pliku css
gulp.task('watch', function() {
  console.log('watching!');
  return watch('./scss/**/*.scss', function () { //obesrwuje wszystkie pliki scss
    console.log('Change detected!');
    return gulp.src('./scss/style.scss')
      .pipe(sass({outputStyle: 'compressed'})) // Using gulp-sass i minifikuje plik css
      .pipe(gulp.dest('./css'))
  })
});

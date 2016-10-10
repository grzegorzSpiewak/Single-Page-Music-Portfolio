var gulp = require('gulp');
var sass = require('gulp-sass');
var watch = require('gulp-watch');
var uglify = require('gulp-uglify');
var pump = require('pump');
var htmlmin = require('gulp-htmlmin');
var imageop = require('gulp-image-optimization');



// compress Sass
gulp.task('watch', function() {
  console.log('watching!');
  return watch('./scss/**/*.scss', function () { //watch on scsss filles
    console.log('Change detected!');
    return gulp.src('./scss/style.scss')
      .pipe(sass({outputStyle: 'compressed'})) // compression for css file
      .pipe(gulp.dest('./dist/css'))
  })
});

// compres JS
gulp.task('compress', function (cb) {
  pump([
        gulp.src('./js/**/*.js'),
        uglify(),
        gulp.dest('dist/js')
    ],
    cb
  );
});

// compress html
gulp.task('minify', function() {
  return gulp.src('./*.html')
    .pipe(htmlmin({collapseWhitespace: true}))
    .pipe(gulp.dest('dist'));
});

// compress images
gulp.task('images', function(cb) {
    gulp.src(['./images/*.png','./images/*.jpg','./images/**.gif','./images/*.jpeg']).pipe(imageop({
        optimizationLevel: 5,
        progressive: true,
        interlaced: true
    })).pipe(gulp.dest('dist/images')).on('end', cb).on('error', cb);
});

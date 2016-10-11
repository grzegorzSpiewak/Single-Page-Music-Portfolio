var gulp = require('gulp');
var sass = require('gulp-sass');
var watch = require('gulp-watch');
var uglify = require('gulp-uglify');
var pump = require('pump');
var htmlmin = require('gulp-htmlmin');
var imageop = require('gulp-image-optimization');
var runSequence = require('run-sequence');
var cleanCSS = require('gulp-clean-css');


// Export SCSS to CSS
gulp.task('watch', function() {
  console.log('watching!');
  return watch('./scss/**/*.scss', function () { //watch on scsss filles
    console.log('Change detected!');
    return gulp.src('./scss/style.scss')
      .pipe(sass({outputStyle: 'expanded'})) // compression for css file
      .pipe(gulp.dest('./css'))
  })
});
// Compress css
gulp.task('minify-css', function() {
  return gulp.src('css/*.css')
    .pipe(cleanCSS({compatibility: 'ie8'}))
    .pipe(gulp.dest('dist/css'));
});

// Compres JS
gulp.task('compress', function (cb) {
  pump([
        gulp.src('./js/**/*.js'),
        uglify(),
        gulp.dest('dist/js')
    ],
    cb
  );
});

// Compress html
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

//build
gulp.task('build', function(callback) {
  runSequence('minify-css',
              ['compress', 'minify'],
              'images',
              callback);
});

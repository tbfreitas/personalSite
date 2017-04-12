var gulp = require('gulp');
var coffee = require('gulp-coffee');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var sourcemaps = require('gulp-sourcemaps');
var del = require('del');
 
var paths = {
  scripts: ['Assets/JS/joilson.js'],
  plugins : {
      jquery : 'node_modules/jquery/dist/jquery.js',
  }
};
 
gulp.task('clean', function() {
  return del(['build']);
});
 
gulp.task('plugins', ['clean'], function() {
  return gulp.src(paths.plugins.jquery)
    .pipe(gulp.dest('Assets/Plugins/Jquery'));
});

// gulp.task('scripts', ['clean'], function() {

//   return gulp.src(paths.scripts)
//     .pipe(sourcemaps.init())
//       .pipe(uglify())
//       .pipe(concat('joilson.min.js'))
//     .pipe(sourcemaps.write())
//     .pipe(gulp.dest('Assets/JS'));
// });

// Rerun the task when a file changes 
gulp.task('watch', function() {
  gulp.watch(paths.scripts, ['scripts']);
});

 
// The default task (called when you run `gulp` from cli) 
gulp.task('default', ['plugins','scripts']);
var gulp            = require('gulp'),
    uglify          = require('gulp-uglify'),
    concat          = require('gulp-concat'),
    es              = require('event-stream'),
    rename          = require('gulp-rename'),
    compass         = require('gulp-compass'),
    prefixer        = require('gulp-autoprefixer'),
    browserSync     = require('browser-sync');

//myFirstGulpTask
gulp.task('default', ['scripts']);

gulp.task('scripts', function(){
    gulp.src('app/assets/js/*.js')
    .pipe(rename({suffix: '.min'}))
    .pipe(uglify())
    .pipe(gulp.dest('app/dist/js'));
});

gulp.watch('watch', function(){
    gulp.watch('app/assets/js/*.js', ['scripts']);
});

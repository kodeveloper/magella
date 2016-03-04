var gulp = require('gulp');
var uglify = require('gulp-uglify');
var concat = require('gulp-concat');
var es = require('event-stream');

//myFirstGulpTask
gulp.task('default', ['scripts, watch']);

gulp.task('scripts', function(){
    gulp.src('assets/js/*.js')
    .pipe(uglify())
    .pipe(gulp.dest('dist'));
});

gulp.watch(function(){
    gulp.watch('assets/js/*js', ['scripts']);
});

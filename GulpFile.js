const gulp = require('gulp');
const babel = require('gulp-babel');
var browserSync = require('browser-sync').create();
 
gulp.task('es6', () => {
    return gulp.src('src/app.js')
        .pipe(babel({
            presets: ['es2015']
        }))
        .pipe(gulp.dest('dist'));
        
});

gulp.task('browser-sync',['es6'], function() {
    browserSync.init({
        server: {
            baseDir: "./"
        }
    });    
});

gulp.task('watch', () => {
    gulp.watch("src/**/*.{html,htm,js,css}").on('change', browserSync.reload);
    gulp.watch("index.html").on('change', browserSync.reload);
    gulp.watch("src/**/*.js", ['es6']);
});

gulp.task('default', ['browser-sync','watch']);



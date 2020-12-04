const gulp = require('gulp');
gulp.task('browser-sync', function() {
    browserSync.init({
        server: {
        port: 9000,
            baseDir: "build"
        }
    });

    gulp.watch('build/**/*')
});
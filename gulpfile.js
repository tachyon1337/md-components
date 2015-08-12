
var gulp=require('gulp');

gulp.task('default',function(){
    console.log('echo md components');
});

gulp.task('build',function(){
    copyScripts();
});

function copyScripts(){
    gulp.src('./lib/**/*.*')
        .pipe(gulp.dest('./dist/md/'));
}
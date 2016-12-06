var gulp = require('gulp');
var sass = require('gulp-sass');
var sourcemaps = require('gulp-sourcemaps');

gulp.task('scss', function(){
    return gulp.src("sass/main.scss") //
        .pipe(sourcemaps.init()) //wywołujemy plik source
        .pipe(sass({
         errLogToConsole: true, //pokazuje błąd na konsoli
         outputStyle: 'compressed', //
         // sourceComments: true, 
        }).on('error', sass.logError))
        .pipe(sourcemaps.write()) 
        .pipe(gulp.dest("css"))
})

gulp.task('default', ['scss'], function() { 
    gulp.watch('sass/**/*.scss', ['scss'])
});


//npm instal gulp --save-dev   -> w domu + ruby
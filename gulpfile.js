var gulp = require('gulp');
var sass = require('gulp-sass');
var browserSync = require('browser-sync').create();
var reload = browserSync.reload;
var jquery = require('gulp-jquery');
var concat = require('gulp-concat');
var minifyCSS  = require('gulp-minify-css');
var uglify     = require('gulp-uglify-es').default;
var rename     = require("gulp-rename");
var runSequence = require('run-sequence');

// sass 編譯函式
gulp.task('sass', function () {
    return gulp.src('./sass/*.scss') //來源目錄
        .pipe(sass().on('error', sass.logError)) //經由sass 轉譯
        .pipe(gulp.dest('./css')); //目的地目錄
});


//jquery環境
gulp.task('jquery', function () {
    return gulp.src('./node_modules/jquery/src')
        .pipe(jquery({
            flags: ['-deprecated', '-event/alias', '-ajax/script', '-ajax/jsonp', '-exports/global']
        }))
        .pipe(gulp.dest('./public/vendor/'));
    // creates ./public/vendor/jquery.custom.js
});


gulp.task('default', ['sass'], function () {

    browserSync.init({
        server: {
            //根目錄
            baseDir: "./",
            index: "index.html"
        }
    });

    gulp.watch(["sass/*.scss", "sass/**/*.scss"], ['sass']).on('change', reload);
    gulp.watch("*.html").on('change', reload);
    gulp.watch("js/*.js").on('change', reload);
    gulp.watch("images/*").on('change', reload);
    // gulp.watch("images/*").on('change', reload);
});



//concat
gulp.task('concat',function () {

    // return gulp.src('src/*.js')
    // .pipe(uglify())
    // .pipe(concat("bundle.min.js"))
    // .pipe(gulp.dest(''));
});

gulp.task('uglify', function() {
    return gulp.src('src/*.js')
        .pipe(concat("bundle.js"))
        .pipe(uglify())
        // .pipe(rename(function(path) {
        //     path.basename += ".min";
        //     path.extname = ".js";
        // }))
        .pipe(gulp.dest('./build/js/'));
});



//minify css
gulp.task('minify-css',['concat'], function() {
    return gulp.src('css/style.css')
        .pipe(minifyCSS({
            keepBreaks: true,
        }))
        .pipe(rename(function(path) {
            path.basename += ".min";
            path.extname = ".css";
        }))
        .pipe(gulp.dest('build/css/'));
});


gulp.task('default',function() {
    runSequence('minify-css','concat','uglify');
});

gulp.task('css', ['cssUrls']);
/**
 * Created by Christopher on 23/02/2018.
 */
var gulp = require('gulp');
var csso = require('gulp-csso');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var sourcemaps = require('gulp-sourcemaps');
var watch = require('gulp-watch');
var autoprefixer = require('gulp-autoprefixer');
var sass = require('gulp-sass');

var src = 'web/';
var dist2 = 'web/dist2';

gulp.task('sass', function () {
    return gulp.src(src + 'sass/styles.scss')
        .pipe(autoprefixer({
            browsers :['last 3 versions'],
            cascade : false
        }))
        .pipe(sourcemaps.init())
        .pipe(sass().on('error', sass.logError))
        .pipe(sourcemaps.write())
        .pipe(gulp.dest(dist2));
});

gulp.task('minify', function () {
    return gulp.src(dist2)
        .pipe(concat('styles.css'))
        .pipe(csso())
        .pipe(gulp.dest(dist2))
})

gulp.task('js', function () {
    return gulp.src([
        'web/js/Jquery/jquery-3.3.1.js',
        'web/js/bootstrapJS/bootstrap.js',
        'web/js/Popper/popper.js',
        'web/js/main.js'
    ])
        .pipe(concat('script.js'))
        .pipe(uglify())
        .pipe(gulp.dest(dist2))
});


gulp.task('dev', ['sass', 'js']);
gulp.task('prod', ['dev', 'minify']);

gulp.task('watch', function () {
    gulp.watch(src + 'sass/styles.scss', ['sass']);
    gulp.watch([
        'web/js/Jquery/jquery-3.3.1.js',
        'web/js/bootstrapJS/bootstrap.js',
        'web/js/Popper/popper.js',
        'web/js/main.js'
    ], ['js']);
});


gulp.task('default', ['dev']);

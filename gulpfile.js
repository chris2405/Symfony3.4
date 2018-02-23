var gulp = require('gulp');
var csso = require('gulp-csso');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var sourcemaps = require('gulp-sourcemaps');
var watch = require('gulp-watch');
var autoprefixer = require('gulp-autoprefixer');

var src = 'web/';
var dist = 'web/dist';

gulp.task('css', function(){
    return gulp.src([
        'web/css/bootstrapCSS/bootstrap.css',
        'web/css/style.css',
        'web/css/font.css'

    ])
        .pipe(autoprefixer({
            browsers :['last 3 versions'],
            cascade : false
        }))
        .pipe(concat('styles.css'))
        .pipe(csso({
            restructure: false,
            sourceMap: true,
            debug: true
        }))
        .pipe(gulp.dest(dist))
});

gulp.task('minify', function () {
    return gulp.src(dist)
        .pipe(concat('styles.css'))
        .pipe(csso())
        .pipe(gulp.dest(dist))
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
        .pipe(gulp.dest(dist))
});

gulp.task('dev', ['css', 'js']);
gulp.task('prod', ['dev', 'minify']);

gulp.task('watch', function () {
    gulp.watch(
        ['web/css/bootstrapCSS/bootstrap.css',
            'web/css/style.css',
            'web/css/font.css'
        ], ['dev']);
    gulp.watch([
        'web/js/Jquery/jquery-3.3.1.js',
        'web/js/bootstrapJS/bootstrap.js',
        'web/js/Popper/popper.js',
        'web/js/main.js'
    ], ['js']);
});

gulp.task('default', ['dev']);

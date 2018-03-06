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
        'web/ExempleCSS/bootstrapCSS/bootstrap.css',
        'web/ExempleCSS/style.css'

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

gulp.task('watch', function () {
    gulp.watch(
        ['web/ExempleCSS/bootstrapCSS/bootstrap.css',
            'web/ExempleCSS/style.css'
        ], ['css']);
    gulp.watch([
        'web/js/Jquery/jquery-3.3.1.js',
        'web/js/bootstrapJS/bootstrap.js',
        'web/js/Popper/popper.js',
        'web/js/main.js'
    ], ['js']);
});

gulp.task('default', ['css', 'js']);


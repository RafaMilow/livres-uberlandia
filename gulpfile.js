const gulp  = require('gulp');
const sass  = require('gulp-sass');
const uglify = require('gulp-uglify');
var sourcemaps = require("gulp-sourcemaps");
var babel = require("gulp-babel");
var concat = require("gulp-concat");
var rename = require("gulp-rename");
var csso = require('gulp-csso');
var autoprefixer = require('gulp-autoprefixer');

gulp.task('scss', function() {
    gulp.src('./scss/*.scss')
      .pipe(sass({
        includePaths: ['./bower_components/foundation-sites/scss']
      }))
      .pipe(gulp.dest('./css'));
});

gulp.task('js', function () {
  return gulp.src("./bower_components/foundation-sites/js/*.js")
    .pipe(sourcemaps.init())
    .pipe(babel())
    .pipe(concat("all.js"))
    .pipe(gulp.dest("./js"))
    .pipe(rename('all.min.js'))
    .pipe(uglify())
    .pipe(sourcemaps.write('./'))
    .pipe(gulp.dest('./js'));
});

gulp.task('css', function () {
    return gulp.src('./css/*.css')
        .pipe(concat("all.css"))
        .pipe(autoprefixer())
        .pipe(gulp.dest('./css/min'))
        .pipe(csso())
        .pipe(rename("main.min.css"))
        .pipe(gulp.dest('./css/min'));
});

var watcher = gulp.watch('./scss/*.scss', ['scss']);
watcher.on('change', function(event) {
  console.log('File ' + event.path + ' was ' + event.type + ', running SCSS...');
});

var watcher2 = gulp.watch('./bower_components/foundation-sites/**/*.scss', ['scss']);
watcher2.on('change', function(event) {
  console.log('File ' + event.path + ' was ' + event.type + ', running SCSS2...');
});


var watcher3 = gulp.watch('./css/*.css', ['css']);
watcher3.on('change', function(event) {
  console.log('File ' + event.path + ' was ' + event.type + ', CSS1');
});


gulp.task('default', ['scss', 'js', 'css']);
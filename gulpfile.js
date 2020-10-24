var gulp = require("gulp");
var sass = require("gulp-sass");
var scsslint = require("gulp-scss-lint");
// var iconfont = require("gulp-iconfont");
// var runTimestamp = Math.round(Date.now() / 1000);
// var browserSync = require("browser-sync").create();
watch = require('gulp-watch');

gulp.task("sass", function () {
  return gulp
    .src("style.scss") // Gets all files ending with .scss in app/scss and children dirs
    .pipe(sass())
    .pipe(gulp.dest("./"));
});

gulp.task("watch", function () {
  gulp.watch("style.scss", gulp.series(["sass"]));
});
/*
gulp.task("scss-lint", function () {
  return gulp.src("./app/scss/*.scss").pipe(scsslint({ config: "lint.yml" }));
});*/
gulp.task('default', function () {
  return gulp.src('**/*.s+(a|c)ss')
    .pipe(scsslint({
      options: {
        formatter: 'stylish',
        'merge-default-rules': false
      },
      files: {
        ignore: '**/*.scss'
      },
      rules: {
        'no-ids': 1,
        'no-mergeable-selectors': 0,
        'hex-length': [
          2, 
          {
            'style': 'long'
          }
        ]
      },
      configFile: 'lint.yml'
    }))
    .pipe(scsslint({
      'reporterOutputFormat': 'Checkstyle',
      'reporterOutput': './scssReport.json'
    }));
});


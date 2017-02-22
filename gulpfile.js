
const gulp = require('gulp')
const sass = require('gulp-sass')
const sourcemap = require('gulp-sourcemaps')

gulp.task('sass', [], function() {
  return gulp.src('src/style/sass/**/*.scss')
    .pipe(sass().on('error',sass.logError))
    // 开发阶段，可以把css 压缩输出
    // .pipe(sass({outputStyle: 'compressed'}).on('error',sass.logError))
    .pipe(sourcemap.write())
    .pipe(gulp.dest('src/style/css'))
})
gulp.task('watch',['sass'], function(e) {
  gulp.watch('src/style/sass/**/*.scss', ['sass'], function() {
    console.log('change ...')
  })
})

gulp.task('default', ['sass'], function() {
    
});


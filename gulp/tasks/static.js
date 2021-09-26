module.exports = function () {
  $.gulp.task('static', () => {
    return $.gulp.src('./public/**/*')
      .pipe($.gulp.dest('./dist/'));
  });
};
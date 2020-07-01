'use strict';
var gulp = require('gulp');
var gulpRename = require('gulp-rename');
var gulpConcat = require('gulp-concat');
var csso = require('gulp-csso');
var gzip = require('gulp-gzip');
var config = {
  'accessKeyId': 'AKIAJT6ERSGYWMKJPPBQ',
  'secretAccessKey': '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',
  region: 'us-east-1',
};
var moment = require('moment');
var s3 = require('gulp-s3-upload')(config);

gulp.task('rename-desktop', function (done) {
  gulp.src('./dist/desktop/**.gz')
    .pipe(gulpRename({ extname: '' }))
    .pipe(gulp.dest('./dist/desktop/gzipped'));
  return done();
});

gulp.task('concat-desktop-css', function (done) {
  gulp.src('css/desktop/*/*.css')
    .pipe(gulpConcat('concat-desktop.css'))
    .pipe(csso())
    .pipe(gzip({ append: false }))
    .pipe(gulpRename('vm-app-desk.1.22.min.css.gz'))
    .pipe(gulp.dest('buildcss'));
  return done();
});

gulp.task('upload-css-files', function (done) {
  gulp.src('buildcss/*')
    .pipe(s3({
      Bucket: 'weddingmonk',
      ACL: 'public-read',
      ContentEncoding: 'gzip',
      ContentType: 'text/css',
      Expires: moment().add(10, 'years').toDate(),
      keyTransform: function(relative_filename) {
        var splitName = relative_filename.split('.');
        splitName.pop();
        splitName = splitName.join('.');
        return 'css/' + splitName;
      }
    }));
  return done();
});

gulp.task('upload-desktop-js-gz-files', function (done) {
  gulp.src('dist/desktop/*.js.gz')
    .pipe(s3({
      Bucket: 'weddingmonk',
      ACL: 'public-read',
      ContentEncoding: 'gzip',
      ContentType: 'application/javascript',
      Expires: moment().add(10, 'years').toDate(),
      keyTransform: function(relative_filename) {
        var splitName = relative_filename.split('.');
        splitName.pop();
        splitName = splitName.join('.');
        return 'js/' + splitName;
      }
    }));
  return done();
});

gulp.task('upload-desktop-js-files', function (done) {
  gulp.src('dist/desktop/*.js')
    .pipe(s3({
      Bucket: 'weddingmonk',
      ACL: 'public-read',
      ContentType: 'application/javascript',
      Expires: moment().add(10, 'years').toDate(),
      keyTransform: function(relative_filename) {
        return 'js/' + relative_filename;
      }
    }));
  return done();
});

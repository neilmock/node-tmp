// TBD:LICENSE

import * as gulp from 'gulp';
import * as bump from 'gulp-bump';

import config from '../buildconf';

gulp.task('bump:major', function () {
  return gulp.src(['package.json'])
    .pipe(bump({type: 'major'}))
    .pipe(gulp.dest('.'));
});

gulp.task('bump:minor', function () {
  return gulp.src(['package.json'])
  .pipe(bump({type: 'minor'}))
  .pipe(gulp.dest('.'));
});

gulp.task('bump:patch', function () {
  return gulp.src(['package.json'])
  .pipe(bump({type: 'patch'}))
  .pipe(gulp.dest('.'));
});

gulp.task('bump:prerelease', function () {
  return gulp.src(['package.json'])
  .pipe(bump({type: 'prerelease'}))
  .pipe(gulp.dest('.'));
});

gulp.task('bump', ['bump:patch']);

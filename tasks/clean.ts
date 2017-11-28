// TBD:LICENSE

import * as gulp from 'gulp';
import * as del from 'del';

import config from '../buildconf';

gulp.task('clean:build', function () {
  return del([config.paths.build]);
});

gulp.task('clean:dist', function () {
  return del([config.paths.dist]);
});

gulp.task('clean:coverage', function () {
  return del([config.paths.coverage]);
});

gulp.task('clean', ['clean:build', 'clean:dist', 'clean:coverage']);

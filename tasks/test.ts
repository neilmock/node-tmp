// TBD:LICENSE

import * as gulp from 'gulp';
import * as mocha from 'gulp-mocha';

import config from '../buildconf';

gulp.task('test', function () {
  return gulp
    .src(config.glob.test, {read: false})
    .pipe(mocha(config.mocha.test));
});

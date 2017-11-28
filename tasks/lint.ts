// TBD:LICENSE

import * as gulp from 'gulp';
import tslint from 'gulp-tslint';

import config from '../buildconf';

gulp.task('lint', function () {
  return gulp.src([config.glob.src, config.glob.test])
    .pipe(tslint(config.tslint.options))
    .pipe(tslint.report(config.tslint.report));
});

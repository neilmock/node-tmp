// TBD:LICENSE

import * as gulp from 'gulp';
import * as mocha from 'gulp-mocha';
import * as istanbul from 'gulp-istanbul';
import * as remapIstanbul from 'remap-istanbul/lib/gulpRemapIstanbul';

import config from '../buildconf';

// based on https://github.com/jburger/typescript-examples/tree/master/typescript_coverage

gulp.task('coverage:instrument', /* ['build'], */ function() {
  return gulp
    .src(config.glob.build_src)
    .pipe(istanbul(config.istanbul.instrumentation))
    .pipe(istanbul.hookRequire());
});

gulp.task('coverage', /* ['clean:coverage', 'coverage:instrument'], */ function() {
  return gulp
    .src(config.glob.build_test)
    .pipe(mocha(config.mocha.coverage))
    .pipe(istanbul.writeReports(config.istanbul.reports))
    .on('end', remapCoverageFiles);
});

// FIXME:coverage does not render the report as expected
// original typescript files are not included
function remapCoverageFiles() {
  return gulp
    .src(config.istanbul.coverage_final)
    .pipe(remapIstanbul(config.istanbul.remap));
}

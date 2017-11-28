// TBD:LICENSE

import * as gulp from 'gulp';
import * as jsonedit from 'gulp-json-editor';

import config from '../buildconf';


gulp.task('dist:auxiliary', function () {
  return gulp
    .src(config.dist.auxiliary)
    .pipe(gulp.dest(config.paths.dist));
});

gulp.task('dist:package-json', function () {
  return gulp
    .src(config.dist.package_json)
    .pipe(jsonedit(function (json) {
      delete json.devDependencies;
      delete json.scripts;
      return json;
    }))
    .pipe(gulp.dest(config.paths.dist));
});

gulp.task('dist:source', function () {
  return gulp
    .src(config.dist.src)
    .pipe(gulp.dest(config.paths.dist));
});

//gulp.task('dist', ['clean', 'lint', 'test', 'coverage', 'dist:source', 'dist:auxiliary', 'dist:package-json']);

// TBD:LICENSE

import * as path from 'path';
import * as gulp from 'gulp';
import * as sourcemaps from 'gulp-sourcemaps';
import * as typescript from 'gulp-typescript';

import config from '../buildconf';

let tsProject = typescript.createProject('tsconfig.json');

gulp.task('build', /* ['clean:build'] , */ function () {
  return gulp
  .src([config.glob.src, config.glob.typings, config.glob.test], {base: '.'})
  .pipe(sourcemaps.init())
  .pipe(tsProject())
  .pipe(sourcemaps.write(
    '.', {
      includeContent: false,
      // make sure that sourcemaps can find the sources
      mapSources: function (filePath, file) {
        return filePath.split(path.sep).splice(1).join(path.sep);
      }
    })
  )
  .pipe(gulp.dest(config.paths.build));
});

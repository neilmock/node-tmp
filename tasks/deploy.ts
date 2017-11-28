// TBD:LICENSE

import {spawn} from 'child_process';
import * as gulp from 'gulp';

import config from '../buildconf';

gulp.task('deploy', /* ['dist'], */ function (done) {
  spawn('npm', ['publish'], { cwd: config.paths.dist, stdio: 'inherit' }).on('close', done);
});

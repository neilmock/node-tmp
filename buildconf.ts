// TBD:LICENSE

import * as path from 'path';

const SRC = 'src';
const DIST = 'dist';
const TEST = 'test';
const BUILD = 'build';
const COVERAGE = 'coverage';

const GLOB_SRC = path.join(SRC, '**', '*.ts');
const GLOB_TEST = path.join(TEST, '**', '*.ts');
const GLOB_TYPINGS = path.join(SRC, '**', '*.d.ts');
const GLOB_BUILD_SRC = path.join(BUILD, 'src', '**', '*.js');
const GLOB_BUILD_TEST = path.join(BUILD, 'test', '**', '*.js');

export default {
  paths: {
    src: SRC,
    dist: DIST,
    test: TEST,
    build: BUILD,
    coverage: COVERAGE
  },

  glob : {
    src : GLOB_SRC,
    test : GLOB_TEST,
    typings: GLOB_TYPINGS,
    build_src: GLOB_BUILD_SRC,
    build_test: GLOB_BUILD_TEST
  },

  dist : {
    src: GLOB_SRC,
    package_json: 'package.json',
    auxiliary: ['README.md']
  },

  mocha : {
    coverage: {
      ui:'bdd'
    },
    test: {
      ui: 'mocha-typescript',
      require: [
        'source-map-support/register',
        'ts-node/register'
      ],
      reporter: 'spec'
    }
  },

  istanbul : {
    reports: {
      reporters: ['json']
    },
    remap: {
      basePath: SRC,
      reports: {
        'html': COVERAGE,
        'text-summary': null,
        'lcovonly': path.join(COVERAGE, 'lcov.info')
      }
    },
    instrumentation: {
      includeUntested:true
    },
    coverage_final: path.join(COVERAGE, 'coverage-final.json')
  },

  tslint : {
    options: {
      configuration: 'tslint.json',
      formatter: 'prose'
    },
    report: {
      emitError: true,
      summarizeFailureOutput: false
    }
  }
};

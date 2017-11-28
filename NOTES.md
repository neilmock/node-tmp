# NOTES on GULP/TYPESCRIPT

/tsconfig.json

The top level tsconfig.json is required for istanbul/mocha as it requires commonjs modules.
I have not been able to make it work with non commojs modules.
Perhaps you can find a solution, then we could be using es2015 for the module type.


## Targets

Most of the targets do not require an explanation, those that do are listed here.
Note that all tasks get their configuration from /buildconf.ts.


### build

Transpiles the existing typescript sources and test sources to javascript.
This is required for later instrumentation by istanbul.

See tasks/build.ts.


### coverage

Instruments the code under build/src and executes the tests under build/test
using these instrumented sources.

The reports will be written to coverage/.

See tasks/coverage.ts.


### test

Runs the existing tests as is.

See tasks/test.ts.


### dist

This copies the existing typescript sources to dist, including README.md and
an augmented version of package.json. The augmented version no longer includes
the devDependencies and scripts.

Of course, this is for my own custom process where I simply release the consumer
version of the package. For development, there still exists the version from github.

Feel free to adjust that as is required for tmp.

See tasks/dist.ts.


var
    gulp   = require('gulp'),

    js     = require('./semantic/tasks/build/javascript'),
    config = require('./semantic/tasks/config/user')
;

// Register a custom build task
// This will build the default semantic files and additionally all js files in the src/ directory
gulp.task('custom-build', (callback) => {
    js.buildJS([
        'src/**/*.js',
        config.paths.source.definitions + '/**/' + config.globs.components + (config.globs.ignored || '') + '.js'
    ], false, config, callback);
});

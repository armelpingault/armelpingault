var gulp = require('gulp');

// gulp.task('default', ['generate-service-worker']);

// function defaultTask(done) {
//     // place code for your default task here
//     done();
// }

gulp.task('generate-service-worker', function(callback) {
    var swPrecache = require('sw-precache');
    var rootDir = './docs';

    swPrecache.write(`${rootDir}/service-worker.js`, {
        staticFileGlobs: [
            rootDir + '/*.{html,js,json,xml}',
            rootDir + '/assets/**/*.{js,css,png,jpg,gif,svg,eot,ttf,woff}'
        ],
        directoryIndex: rootDir,
        stripPrefix: rootDir
    }, callback);
});
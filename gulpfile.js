var gulp = require('gulp');

gulp.task('generate-service-worker', function(callback) {
    var swPrecache = require('sw-precache');
    var rootDir = './docs';

    swPrecache.write(`${rootDir}/sw.js`, {
        staticFileGlobs: [
            rootDir + '/*.{html,js,json,xml}',
            rootDir + '/assets/**/*.{js,css,png,jpg,gif,svg,eot,ttf,woff}'
        ],
        directoryIndex: rootDir,
        stripPrefix: rootDir
    }, callback);
});
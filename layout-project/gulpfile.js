'use strict';
const {src , dest} = require('gulp');
const copyScss = () => {
    return src('dist/scss/common/*.scss')
        .pipe(dest('build/styles'))
}

exports.copy = copyScss

'use strict';
const {src , dest , parallel , watch} = require('gulp');
const copyScss = () => {
    return src('dist/scss/common/*.scss')
        .pipe(dest('build/styles'))
}

const sassCompile = (done) => {
    console.log('Compile SASS to CSS');

    done();
};

const pugCompile = (done) => {
    console.log('Compile Pug to HTML');

    done();
};

const imagesOptimize = (done) => {
    console.log('Optimize Images');

    done();
};

const watchers = () => {
    watch('dist/scss/index.scss', (done) => {
        console.log('File index.scss was changed');
        done()
    })
}


exports.default = parallel(sassCompile, pugCompile, imagesOptimize);
exports.layoutCompile = parallel(sassCompile, pugCompile);
exports.assetsOptimize = imagesOptimize;
exports.copy = copyScss
exports.watchers = watchers


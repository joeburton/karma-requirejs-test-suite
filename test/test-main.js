var tests = [];

for (var file in window.__karma__.files) {
    if (/Spec\.js$/.test(file)) {
        tests.push(file);
    }
    // console.log(file);
}

console.log(tests);

requirejs.config({
    
    // Karma serves files from '/base'
    baseUrl: '/base/js',

    paths: {
        'jquery': '../lib/jquery',
        'underscore': '../lib/underscore',
    },

    shim: {
        'underscore': {
            exports: '_'
        }
    },

    // ask Require.js to load these files (all our tests)
    deps: tests,

    // start test run, once Require.js is done
    callback: window.__karma__.start
});


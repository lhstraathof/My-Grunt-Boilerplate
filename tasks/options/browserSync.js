module.exports = {
    bsFiles: {
        // multiple globs
        src : ["css/minified/**", "*.html", "js/**", "img/**"]
    },
    options: {
        server: {
            baseDir: "./"
        },
        watchTask: true
    }
}
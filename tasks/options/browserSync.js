module.exports = {
    bsFiles: {
    	// multiple globs
        src : ["assets/css/**", "**.*.html", "assets/js/**/*.js", "assets/img/**"]
    },
    options: {
        server: {
            baseDir: "./"
        },
        watchTask: true
    }
}
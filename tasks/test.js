module.exports = function(grunt) {
  grunt.registerTask('test', ['browserSync', 'watch', 'weinre']);
};
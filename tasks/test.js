module.exports = function(grunt) {
  grunt.registerTask('test', ['browserSync', 'weinre', 'watch']);
};
module.exports = {
  dynamic: {
    files: [{
      expand: true,
      cwd: 'assets/img/',
      src: ['assets/img/**/*.{png,jpg,gif}'],
      dest: 'img/'
    }]
  }
}
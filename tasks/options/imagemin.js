module.exports = {
  dynamic: {
    files: [{
      expand: true,
      cwd: 'assets/img/',
      src: ['*.{png,jpg,gif}', '**/*.{png,jpg,gif}'],
      dest: 'img/'
    }]
  }
}
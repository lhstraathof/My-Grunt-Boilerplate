module.exports = {
  dynamic: {
    files: [{
      expand: true,
      cwd: 'source/img/',
      src: ['*.{png,jpg,gif}', '**/*.{png,jpg,gif}'],
      dest: 'img/'
    }]
  }
}
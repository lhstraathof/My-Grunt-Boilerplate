module.exports = {
  dist: {
    options: {
      // cssmin will minify later
      style: 'expanded'
    },
    files: {
      'css/global.css': 'assets/css/global.scss'
    }
  }
}
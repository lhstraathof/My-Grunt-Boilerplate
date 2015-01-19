module.exports = {
  dist: {
    options: {
      // cssmin will minify later
      style: 'expanded'
    },
    files: {
      'css/global.css': 'source/css/global.scss'
    }
  }
}
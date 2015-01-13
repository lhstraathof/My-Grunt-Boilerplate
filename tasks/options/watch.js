module.exports = {
  // options: {
  //   livereload: true,
  // },
  scripts: {
    files: ['assets/js/*.js', 'assets/js/vendor/*.js', 'assets/js/app/*.js'],
    tasks: ['jshint', 'concat', 'uglify'],
    options: {
      spawn: false,
    }
  },
  css: {
    files: ['assets/css/*.scss', 'assets/css/**/*.scss'],
    tasks: ['sass', 'autoprefixer', 'cssmin'],
    options: {
      spawn: false,
    }
  },
  images: {
    files: ['assets/img/*.{png,jpg,gif}', 'assets/img/**/*.{png,jpg,gif}'],
    tasks: ['imagemin'],
    options: {
      spawn: false,
    }
  },
  html:{
    files: ['./**/*.html'],
    tasks: [],
    options: {
      spawn: false
    }
  }
}
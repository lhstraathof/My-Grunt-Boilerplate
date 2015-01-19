module.exports = {
  // options: {
  //   livereload: true,
  // },
  scripts: {
    files: ['source/js/*.js', 'source/js/vendor/*.js', 'source/js/app/*.js'],
    tasks: ['jshint', 'concat', 'uglify'],
    options: {
      spawn: false,
    }
  },
  css: {
    files: ['source/css/*.scss', 'source/css/**/*.scss'],
    tasks: ['sass', 'autoprefixer', 'cssmin'],
    options: {
      spawn: false,
    }
  },
  images: {
    files: ['source/img/*.{png,jpg,gif}', 'source/img/**/*.{png,jpg,gif}'],
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
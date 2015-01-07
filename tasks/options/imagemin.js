module.exports = {
  // dynamic: {
  //   files: [{
  //     expand: true,
  //     cwd: 'assets/img/',
  //     src: ['**/*.{png,jpg,gif}'],
  //     dest: 'img/'
  //   }]
  // }
  dynamic: {                         // Another target
  	  options: {                       // Target options
        // svgoPlugins: [{ removeViewBox: false }],
        cache: false
      },
      files: [{
        expand: true,                  // Enable dynamic expansion
        cwd: '/assets/img/',            // Src matches are relative to Gruntfile path
        src: ['**/*.{png,jpg,gif}'],   // Actual patterns to match
        dest: 'img/',                  // Destination path prefix
      }]
    }
}
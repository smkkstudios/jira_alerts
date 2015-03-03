module.exports = function(grunt) {
  grunt.config.set('bower', {
    dev: {
        dest: '.tmp/public',
        js_dest:   '.tmp/public/js',
        options: {
	      packageSpecific: {
	        'ember': {
	          files: [
	            "ember.debug.js",
	            "ember-template-compiler.js"
	          ]
	        }
	      }
	  }
    },
    
  });

  grunt.loadNpmTasks('grunt-bower');

};

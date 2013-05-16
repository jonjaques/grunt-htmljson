module.exports = function(grunt) {
  "use strict";

  // Load local tasks.
  grunt.task.loadTasks('../tasks');

  // // Project configuration.
  grunt.config.init({
    htmljson: {
      dist: {
         src: ['src/*.txt', 'src/*.html'],
         dest: 'dist/templates.json',
         options: {
           separator: 2
         }
      }
    }
  });

  // Default task.
  grunt.registerTask('default', 'htmljson:dist');

};

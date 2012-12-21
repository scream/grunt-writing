/*global module:false*/
module.exports = function(grunt) {
  grunt.loadNpmTasks("grunt-contrib");
  // Default task.
  grunt.registerTask('default', 'lint requirejs concat min');
  // Project configuration.
  grunt.initConfig({
    pkg: '<json:writing.jquery.json>',
    meta: {
      banner: '/*! <%= pkg.title || pkg.name %> - v<%= pkg.version %> - ' +
        '<%= grunt.template.today("yyyy-mm-dd") %>\n' +
        '<%= pkg.homepage ? "* " + pkg.homepage + "\n" : "" %>' +
        '* Copyright (c) <%= grunt.template.today("yyyy") %> <%= pkg.author.name %>;' +
        ' Licensed <%= _.pluck(pkg.licenses, "type").join(", ") %> */'
    },
    concat: {
      dist: {
        src: ['<banner:meta.banner>',  'src/dist/mvc.js', 'src/app/main.js'],
        dest: 'src/dist/main-app.js'
      }
    },
    min: {
      dist: {
        src: ['src/dist/main-app.js'],
        dest: 'src/dist/main-app-min.js'
      }
    },
	lint: {
      files: ['grunt.js']
    },
	requirejs: {
		dist: {
			options: {
				out : 'src/dist/mvc.js',
				baseUrl: './',
				packages : [
					{
						'name': 'add',
						'location': 'add'
					},
					{
						'name': 'sub',
						'location': 'sub'
					}
				],
				include : grunt.file.expandFiles('src/module/*.js').map(function (file) {
					return file.replace(/src\/module\/(\*)\.js$/, '$1');
				}),
				optimize : 'none'
			}
		}
	}
  });
};

var gulp 	= require('gulp'),
	plugins = require('gulp-load-plugins')();

function inc(importance) {
	return gulp.src([
			'./package.json', 
			'./bower.json'
		])
		.pipe(plugins.bump({
			type: importance
		}))
		.pipe(gulp.dest('./'))
		.pipe(plugins.git.commit('Bumping package version!'))
		.pipe(plugins.filter('package.json'))
		.pipe(plugins.tagVersion());
}
 
gulp.task('patch', 		function() { 
	return inc('patch'); 
})
gulp.task('feature', 	function() { 
	return inc('minor'); 
})
gulp.task('release', 	function() { 
	return inc('major'); 
})
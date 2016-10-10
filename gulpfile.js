//Install node https://nodejs.org
//clone this repo

var gulp = require('gulp'),
    changed = require('gulp-changed');

var viewsSrc = '../americanstandard-sites-asus/website/Views/**/*',
    viewsDest = 'C:/inetpub/wwwroot/develop.local.americanstandard-us.com/website/Views';
    
gulp.task('copymarkup', function() {
	return gulp.src(viewsSrc)
		.pipe(changed(viewsDest))
		.pipe(gulp.dest(viewsDest));
});

gulp.task('watch', function(){
	gulp.watch(viewsSrc, gulp.series('copymarkup'));
})

gulp.task('default', gulp.series('copymarkup','watch'));
//Require Dependancies
var gulp = require('gulp');
//var jshint = require('gulp-jshint');
var jscs = require('gulp-jscs');
var nodemon = require('gulp-nodemon');
var tsc = require('gulp-typescript');
var tslint = require('gulp-tslint');
var sass = require('gulp-sass');

//TS Config File
var tsProject = tsc.createProject('tsconfig.json');

//Get All TypeScript Files
var tsfiles = ['routes/*.ts'];
var libraryTypeScriptDefinitions = 'typings/globals/**/*.ts';

//Lint all custom TS files.
gulp.task('lint-ts', function() {
    return gulp.src(tsfiles)
     .pipe(tslint({
     	configuration: "tslintsettings.json",
     	formatter: "verbose"
     }))
     .pipe(tslint.report());
});

//Compile TypeScript
gulp.task('compile-ts', function()  {

	var tsResult = tsProject.src()
	.pipe(tsc(tsProject));

	 return tsResult.js.pipe(gulp.dest('./assets/js'));
});

//Compile Sass
gulp.task('compile-sass-bootstrap', function() {
    return gulp.src('assets/libraries/bootstrap-sass/**/*.scss')
    .pipe(sass())
    .pipe(gulp.dest('assets/css/'))
});

gulp.task('compile-sass-custom', function() {
    return gulp.src('assets/scss/*.scss')
    .pipe(sass())
    .pipe(gulp.dest('assets/css/custom/'))
});

//Get All JS Files
var jsFiles = ['*.js', 'src/**/*.js'];

//Make JavaScript Files Pretty
gulp.task('style', function() {
    return gulp.src(jsFiles)
     .pipe(jscs());
});

//Inject JS and CSS into views
gulp.task('inject', ['lint-ts', 'compile-ts', 'compile-sass-bootstrap', 'compile-sass-custom', 'style'], function() {
    var wiredep = require('wiredep').stream;
    var inject = require('gulp-inject');

    var injectSrc = gulp.src([
     './assets/css/assets/**/*.css',
     './assets/libraries/font-awesome/css/font-awesome.css',
     './assets/css/custom/*.css',
     './assets/js/custom/*.js'
     ]);

    var injectOptions = {
        ignorePath: '/assets'
    };

    var options = {
        bowerJson: require('./bower.json'),
        directory: './assets/libraries',
        ignorePath: '../assets'
    };

    return gulp.src('./views/*.ejs')
     .pipe(wiredep(options))
     .pipe(inject(injectSrc, injectOptions))
     .pipe(gulp.dest('./views'));
});

//Gulp Runs All Dev Tasks
gulp.task('dev', ['inject'], function(){

});

//Gulp Wathces for File Changes
gulp.task('watch', ['dev'], function() {
	gulp.watch('./assets/ts/**/*.ts', ['dev']);
});

//Run Both Dev and Watch Tasks
gulp.task('serve', ['dev', 'watch'], function() {

        var options = {
	        script: 'assets/js/app.js',
	        delayTime: 1,
	        env: {
	            'PORT' : 6682
	        }
        }

        return nodemon(options)
	     .on('restart', function(ev) {
	        console.log('RESTARTING.....');
	    });

});
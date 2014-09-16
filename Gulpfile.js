'use strict';

// Gulp Plugins
var gulp 		= require('gulp'),
	jshint 		= require('gulp-jshint'),
	uglify 		= require('gulp-uglify'),
	concat 		= require('gulp-concat'),
	rename 		= require('gulp-rename'),
	sass 		= require('gulp-ruby-sass'),
    raster      = require('gulp-raster'),
    connect     = require('gulp-connect'),
	browserSync = require('browser-sync'),
    livereload  = require('gulp-livereload'),
	reload      = browserSync.reload,

    // VARIABLES PATH ----------------------------------------------------

        // Assets paths
        _assets     = "assets/",

    	// Build paths
    	_build_js 	= "build/js",
    	_build_css	= "build/css",
    	_build_img	= "build/img",

        // General files
    	_files		= ['*.php', '*.html', 'build/**/*', 'build/in/*.php'];

	// STYLES ------------------------------------------------------------

        //main.min.css
        gulp.task('sass', function () {

    	    return gulp.src(_assets+'scss/main.scss')
    	    	.pipe(sass({
    	    		trace: true,
    	    		noCache: true,
    	    		style: "compressed"
    	    	}))
    	        .on('error', function (err) { console.log(err.message); })
    	        .pipe(rename({suffix: ".min"}))
    	        .pipe(gulp.dest(_build_css))
    	        .pipe(reload({stream:true}));
    	});

	// SCRIPTS  ----------------------------------------------------------

		// JShint
		gulp.task('lint', function() {
			return gulp.src(_assets+'js/*.js')
                .pipe(jshint())
                .pipe(jshint.reporter('default'));
		});

		// Concat
		gulp.task('concat', function() {

			// scripts.min.js
			gulp.src([
				'components/jquery/jquery.js', // jQuery Lib
				_assets+'js/scripts.js'
				])
		    .pipe(concat('scripts.js'))
		    .pipe(gulp.dest(_build_js))
		    .pipe(rename({suffix: ".min"}))
		    .pipe(uglify())
		    .pipe(gulp.dest(_build_js))
		    .pipe(reload({stream:true}));

            // projects.min.js
            gulp.src([
                'components/jquery/jquery.js', // jQuery Lib
                'components/jquery-github/jquery.github.js', // jquery.github.js
                _assets+'js/projects.js'
                ])
            .pipe(concat('projects.js'))
            .pipe(gulp.dest(_build_js))
            .pipe(rename({suffix: ".min"}))
            .pipe(uglify())
            .pipe(gulp.dest(_build_js))
            .pipe(reload({stream:true}));
		});

	// BROWSER SYNC ------------------------------------------------------
    	gulp.task('browser-sync', function() {
    	    browserSync({
    	        proxy: "localhost:4000"
    	    });
    	});

    // LIVERELOAD --------------------------------------------------------
        gulp.task('liverelaod', function() {
            connect.server({ livereload: true });
        });


	// WATCH -------------------------------------------------------------
    	gulp.task('watch', function() {

            // watch Files
    		gulp.watch(_files, function(){
    			gulp.src(_files).pipe(connect.reload());
    		});

    		// watch JS
    		gulp.watch(_assets+'js/*.js', ['lint','concat']);

    		// watch CSS
            gulp.watch(_assets+'scss/**/*.scss', ['sass']);

    	});

	// RUN TASKS ---------------------------------------------------------
    	gulp.task('default',    ['watch', 'liverelaod']);
    	gulp.task('sync', 		['watch', 'browser-sync']);
    	gulp.task('css', 		['sass']);
    	gulp.task('js', 		['lint', 'concat']);





var gulp=require("gulp"),
	cssmin=require("gulp-clean-css");
	gulp.task("cssmin",function(){
		gulp.src("./index.css")
		.pipe(gulp.dest("./"))
	})
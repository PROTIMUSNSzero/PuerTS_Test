var gulp = require("gulp");
var ts = require("gulp-typescript");
var tsProject = ts.createProject("tsconfig.json");

gulp.task("build", function () {
    console.log("build js");
    return tsProject.src()
    .pipe(tsProject())
    .js.pipe(gulp.dest("dist"));
});

gulp.task("builddts", function () {
    console.log("build d.ts");
    return tsProject.src()
    .pipe(tsProject())
    .dts.pipe(gulp.dest("dist"));
});
var gulp = require("gulp");
var ts = require("gulp-typescript");
var tsProject = ts.createProject("tsconfig.json");
const inject = require('gulp-inject-string');
const { src } = require("gulp");

gulp.task("build", function () {
    gulp.task("display");
    return tsProject.src()
    .pipe(tsProject())
    .js.pipe(inject.prepend("require('./libs/kunpo.js');\n"))
    .pipe(gulp.dest("dist"));
});

gulp.task("display", function() {
    console.log("gulp task");
});
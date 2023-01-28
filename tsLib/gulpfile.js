var gulp = require("gulp");
var ts = require("gulp-typescript");
var tsProject = ts.createProject("tsconfig.json");
const inject = require("gulp-inject-string");

gulp.task("build", function () {
    console.log("build js");
    return tsProject.src()
    .pipe(tsProject())
    .js.pipe(inject.prepend("global.kunpo = global.kunpo || {};\n"))
    .pipe(inject.replace('var kunpo;', ''))
    .pipe(gulp.dest("dist/exports"))
    .pipe(gulp.dest("../ts/dist/libs"));
});

gulp.task("builddts", function () {
    console.log("build d.ts");
    return tsProject.src()
    .pipe(tsProject())
    .dts.pipe(gulp.dest("dist/exports"))
    .pipe(gulp.dest("../ts/src/libs"));
});
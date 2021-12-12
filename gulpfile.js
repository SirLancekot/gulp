'use strict'

/* function defaultTask(cb) {
  // place code for your default task here
  cb();
}

exports.default = defaultTask */


//Запуск и завершение задач
/*const gulp = require('gulp')

gulp.task('hello', function(callback) {
  console.log("Hello");
  callback();
}); 
//  пример о сигнализации завершния задачи



gulp.task('example:promise', function() {
  return new Promise((resolve,reject) => {
    resolve('result');  
  });
}); 


gulp.task('example:stream', function() {
  return require ('fs').createReadStream(_filename);
}); 

gulp.task('example:process', function() {
  return require ('child_process').spawn('is',[node_modules], {stdio: 'inherit'});
}); 

gulp.task('example', gulp.series ('hello', 'example:promise', 'example:stream', 'example:process')); */





/*const gulp = require('gulp');
const stylus = require ('gulp-stylus');

gulp.task('styles', function() {*/
  //return gulp.src('name/styles/**/*.styl')
    /*.pipe(stylus())
    .pipe(gulp.dest('public'));
});
*/

//wacth

gulp.watch('name/styles/**/*.*', gulp.series('styles')); 
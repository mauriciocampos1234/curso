const gulp = require('gulp');
const imagemin = require('gulp-imagemin');

gulp.task('mensagem',function(){
    return console.log("Tudo certo!");
});

gulp.task('copiarHTML',function(){
    gulp.src('src/*.html').pipe(gulp.dest('destino'));
});

gulp.task('default',()=>{
    return console.log('Yay!!!!')
});

gulp.task('diminuirImagem',()=>{
    gulp.src('src/*').pipe(imagemin()).pipe(gulp.dest('dist'));
});

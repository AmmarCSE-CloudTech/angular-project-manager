var gulp        = require('gulp'),    
    browserSync = require('browser-sync'),
    reload      = browserSync.reload;

/* ================================== */
/* ===== BrowserSync Dev Server ===== */
/* ================================== */

gulp.task('default', function() {
  browserSync({ 
    server: { 
      baseDir: ['./', './site'],
      index: './site/index.html'
    } 
  });
  gulp.watch('site/**/*.html', reload);
});
/**
 * System configuration for Angular 2 samples
 * Adjust as necessary for your application needs.
 */
(function(global) {
  // map tells the System loader where to look for things
  var map = {
    'app':                        'app', // 'dist',
    '@angular':                   'node_modules/@angular',
    'angular2-in-memory-web-api': 'node_modules/angular2-in-memory-web-api',
    'rxjs':                       'node_modules/rxjs',
    'jquery':                       'assets/js/jquery-2.1.4.min.js?ver=1',
    'bootstrap': "assets/js/bootstrap.min.js",
    'toastr': "assets/js/toastr.min.js",
    'jquery.ui': "assets/js/jquery-ui.min.js",
    'jquery.appear': "assets/js/jquery.appear.js",
    'jquery.sticky': "assets/js/jquery.sticky.js",
    'jquery.nav': "assets/js/jquery.nav.js",
    'jquery.matchHeight': "assets/js/jquery.matchHeight.min.js",
    'highcharts': "assets/js/highcharts.js",
    'icheck': "assets/js/icheck.min.js",
    'moment': "assets/js/moment.min.js",
    'fullcalendar': "assets/js/fullcalendar.min.js",
    'google-maps': "assets/js/google-maps.js"
  };
  // packages tells the System loader how to load when no filename and/or no extension
  var packages = {
    'app':                        { main: 'main.js',  defaultExtension: 'js' },
    'rxjs':                       { defaultExtension: 'js' },
    'angular2-in-memory-web-api': { main: 'index.js', defaultExtension: 'js' },
  };
  var ngPackageNames = [
    'common',
    'compiler',
    'core',
    'forms',
    'http',
    'platform-browser',
    'platform-browser-dynamic',
    'router',
    'router-deprecated',
    'upgrade',
  ];
  // Individual files (~300 requests):
  function packIndex(pkgName) {
    packages['@angular/'+pkgName] = { main: 'index.js', defaultExtension: 'js' };
  }
  // Bundled (~40 requests):
  function packUmd(pkgName) {
    packages['@angular/'+pkgName] = { main: 'bundles/' + pkgName + '.umd.js', defaultExtension: 'js' };
  }
  // Most environments should use UMD; some (Karma) need the individual index files
  var setPackageConfig = System.packageWithIndex ? packIndex : packUmd;
  // Add package entries for angular packages
  ngPackageNames.forEach(setPackageConfig);
  var config = {
    map: map,
    packages: packages
  };
  System.config(config);
})(this);

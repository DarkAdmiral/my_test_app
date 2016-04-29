// get the dependencies
var gulp = require('gulp'),
  gutil = require("gulp-util"),
  webpack = require("webpack"),
  WebpackDevServer = require("webpack-dev-server"),
  webpackConfig = require("./webpack.config.js");
  // electron = require('electron-prebuilt');
//   browserify    = require('browserify');

// create the gulp task
// gulp.task('run', function () {
//   nodemon({
//     script: './', //folder of package.json or script file
//     ext: 'js html',
//     env: { 'NODE_ENV': 'development'}

//   })

//   // childProcess.spawn(node, ['./app'], { stdio: 'inherit' });
// });

gulp.task("run", ["webpack-dev-server"]);

gulp.task("webpack-dev-server", function(callback) {
	// modify some webpack config options
	var myConfig = Object.create(webpackConfig);
	myConfig.devtool = "eval";
	myConfig.debug = true;

	// Start a webpack-dev-server
	new WebpackDevServer(webpack(myConfig), {
		publicPath: "/", //+ myConfig.output.publicPath,
		stats: {
			colors: true
		}
	}).listen(8080, "localhost", function(err) {
		if(err) throw new gutil.PluginError("webpack-dev-server", err);
		gutil.log("[webpack-dev-server]", "http://localhost:8080/webpack-dev-server/index.html");
	});
});
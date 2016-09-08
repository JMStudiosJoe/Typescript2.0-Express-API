var gulp = require("gulp");
var exec = require('child_process').exec;
gulp.task('default', function(cb) {
	console.log(cb);
    
    exec('tsc', (err, stdout, stderr) => {
    if (err) {
        console.error(err);
        console.log("nope there was an error");
        return;
    }
        console.log(stdout);
        console.log("finished tsc -w no starting node");
        runApp();
    });
    //return cp.execFile('ls -la');

});

var runApp = function() {
    exec('node app.js', (err, stdout, stderr) => {
    if (err) {
        console.error(err);
        return;
    }
        console.log(stdout);
        
    });
};
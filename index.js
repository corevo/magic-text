var exec = require('child_process').exec;

function getText(path, lang , cb) {
	/*The function's supposed to be [tesseract path stdout -l lang]*/
	if (cb != undefined) {
    exec('tesseract '+ path + ' -l ' + lang , function (error, stdout, stderr) {
		if(error != null) {
			console.log("There was an error: " + error)
		}
        cb(error, stdout);
    });
	} else {
		    exec('tesseract '+ path + ' stdout -l ' + lang , function (error, stdout, stderr) {
		if(error != null) {
			console.log("There was an error: " + error)
		}
    });		
	}
}

module.exports.getText = getText;

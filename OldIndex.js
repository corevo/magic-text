var exports = module.exports = {};
exports.MagicTextL = function (path, lang) {
    var tess = require('node-tesseract'),
	options = {
		l: lang,
		psm: 0
	};
    tess.process(__dirname + "/" + path, options , function (err, text) {
        if (err) {
            console.log(err);
        } else {
            console.log(text);
            return (text);
        }
    });
};
exports.MagicText = function (path) {
    var tess = require('node-tesseract');
	
    tess.process(__dirname + "/" + path, function (err, text) {
        if (err) {
            console.log(err);
        } else {
            console.log(text);
            return (text);
        }
    });
};

var exec = require('tesseract').exec;

function process(lang, path, cb) {
    exec('tesseract print -l ' + lang + " -psm 2" + path, function (error, stdout, stderr) {
        cb(error, stdout);
    });
}

module.exports.process = process;

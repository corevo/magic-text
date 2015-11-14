var exports = module.exports = {};
exports.MagicText = function (path) {
    var tess = require('node-tesseract'),
        fs = require('fs');

    fs.readFile(path, function (err, data) {
        if (err) throw err;
        console.log(data);
    });


    tess.process(__dirname + path, function (err, text) {
        if (err) {
            console.log(err);
        } else {
            console.log(text);
            return (text);
        }
    });
};
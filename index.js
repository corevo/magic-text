var exports = module.exports = {};
exports.MagicText = function (path) {
    var tess = require('node-tesseract'); //,
        //fs = require('fs');

    //var File = fs.readFileSync(path, 'utf8');
    tess.process(__dirname + "/" + path, function (err, text) {
        if (err) {
            console.error(err);
        } else {
            console.log(text);
            return (text);
        }
    });
};

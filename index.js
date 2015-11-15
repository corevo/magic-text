var exports = module.exports = {};
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

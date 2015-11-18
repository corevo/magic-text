var exports = module.exports = {};
exports.MagicText = function(image,lang){
var tesseract = require("tesseract")
  , tess = new tesseract.BaseApi();
 // , pix;
 
// set language 
tess.init(lang);
// set image 
tess.setImage(image);
// run recognition 
tess.recognize();
// get recognized text 
console.log(tess.getText());
 
// clear results 
tess.clear();
tess.finish();
}
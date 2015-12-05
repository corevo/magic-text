var Tess = require("../index.js");
Tess.getText("1.jpeg", "heb", function(err,data){
	console.log("1.jpeg: " + data);
});
Tess.getText("2.jpg", "heb", function(err,data){
	console.log("2.jpg: " + data);
});
Tess.getText("3.tif", "heb", function(err,data){
	console.log("3.tif: " + data);
});
Tess.getText("4.jpg", "heb", function(err,data){
	console.log("4.jpg: " + data);
});

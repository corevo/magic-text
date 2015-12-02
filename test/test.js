var Tess = require("../index.js");
Tess.getText(process.argv[2], process.argv[3], function(err,data){
	console.log(data);
});

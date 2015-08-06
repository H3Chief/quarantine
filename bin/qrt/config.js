var program = require("commander");
var qrt = require("../../package.json");
program
	.version(qrt.version)
	.parse(process.argv);
module.exports = program;

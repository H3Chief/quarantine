#!/usr/bin/env node
process.title = "qrt";
var parseArgs = require("minimist");

var argv = parseArgs(process.argv.slice(1),{
	'--':true
});

console.log("command to execute", argv);

require("babel/register");
var React = require("react");
var CommandLine = require("./src/views/main.jsx");

React.render(<CommandLine />, document.getElementById("decontaminate"));

require("babel/register");
let React = require("react");
let injectTapEventPlugin = require("react-tap-event-plugin");
let Quarantine  = require("./client/Quarantine.jsx");

//Needed for onTouchTap
injectTapEventPlugin();


React.render(<Quarantine />, document.getElementById("decontaminate"));


let React = require("react");
let mui = require("material-ui");
let ThemeManager = new mui.Styles.ThemeManager();
let AppBar = mui.AppBar;

var Quarantine = React.createClass({
	// required for material-ui theme
	getChildContext: function(){
		return {
			muiTheme: ThemeManager.getCurrentTheme()
		}	
	},

	render: function(){
		return (<AppBar title="Quarantine" />);	
	}
});

Quarantine.childContextTypes = {
	muiTheme: React.PropTypes.object
}

module.exports = Quarantine;

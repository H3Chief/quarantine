let React = require("react");
let mui = require("material-ui");
let ThemeManager = mui.Styles.ThemeManager();
let {AppBar, AppCanvas } = mui;


var Quarantine = React.createClass({
	// required for material-ui theme
	getChildContext: function(){
		return {
			muiTheme: ThemeManager.getCurrentTheme()
		}	
	},
	render: function(){
		return (
		<AppCanvas>	
			<AppBar title="Quarantine" />
		</AppCanvas>	
		);	
	}
});

Quarantine.childContextTypes = {
	muiTheme: React.PropTypes.object
}

module.exports = Quarantine;

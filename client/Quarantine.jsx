let React = require("react");
let mui = require("material-ui");
let ThemeManager = new mui.Styles.ThemeManager();


var Quarantine = React.createClass({
	// required for material-ui theme
	getChildContext: function(){
		return {
			muiTheme: ThemeManager.getCurrentTheme()
		}	
	},

	render: function(){
		return (<div>Hello World</div>);	
	}
});

Quarantine.childContextTypes = {
	muiTheme: React.PropTypes.object
}

module.exports = Quarantine;

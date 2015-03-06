var React = require('react');
var Router = require('react-router');
var authmixin = require('../authmixin');
var State = require("react-router").State;

var Group = React.createClass({
	mixins: [authmixin],
  render: function() {
    return (
      <div>
      	<RepoTitle item={ORGS[0]} />
      	<RepoList items={ORGS[0].repos} />
        <OrgList items={ORGS} />
      </div>
    );
  }
});

var OrgList = React.createClass({
	render: function() {
		var rows = []
		this.props.items.forEach(function(item) {
      rows.push(<OrgRow item={item} />);
	  });
		return (
			<div>
				{rows}
			</div>
		);
	}
});

var OrgRow = React.createClass({
	render: function() {
		return (
			<div>
				{this.props.item.name}
			</div>
		);
	}
})

var RepoRow = React.createClass({
	render: function() {
		return (
			<div>
				{this.props.item.name}
			</div>
		);
	}
})

var RepoTitle = React.createClass({
	render: function() {
		return (
			<div>
				{this.props.item.name}
			</div>
		);
	}
});


var RepoList = React.createClass({
	render: function() {
		var rows = []
		this.props.items.forEach(function(item) {
      rows.push(<RepoRow item={item} />);
	  });
		return (
			<div>
				{rows}
			</div>
		);
	}
});


var ORGS = [
	{ name: 'lifedispenser', 
		repos: [
			{ name: "repo1"},
			{ name: "repo2"},
			{ name: "repo3"},
			{ name: "repo4"},
			{ name: "repo5"},
		]
	},
	{
		name: 'hyssop',
		repos: [
			{ name: "repo1"},
			{ name: "repo2"},
			{ name: "repo3"}
		]
	},
	{
		name: 'attendanceproj',
		repos: [
			{ name: "repo1"}
		]
	}
];

module.exports = Group;

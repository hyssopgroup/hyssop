var React = require('react');
var Router = require('react-router');
var Route = Router.Route;
var DefaultRoute = Router.DefaultRoute;

var App = require('./components/app');
var OAuth = require('./components/oauth');
var Group = require('./components/group');

var routes = (
	<Route name="app" path="/" handler={App}>
		<Route name='oauth' handler={OAuth} />
		<Route name="group" handler={Group} />
		<DefaultRoute handler={Group} />
	</Route>
);

exports.start = function() {
  Router.run(routes, function (Handler) {
		React.render(<Handler />, document.getElementById('content'));
	});
}
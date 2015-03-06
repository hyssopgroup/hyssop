var React = require('react');
var Router = require('react-router');
var RouteHandler = Router.RouteHandler;

var App = React.createClass({
	mixins: [Router.State],
	
  render: function() {
    return (
      <div className="App">
        <RouteHandler />
      </div>
    );
  }
});

module.exports = App;

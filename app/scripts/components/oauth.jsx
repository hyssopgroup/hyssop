var React = require('react');
var cookie = require("cookies-js");

var OAuth = React.createClass({
  render: function() {
    return (
      <div className="oauth">
        <a href={'https://github.com/login/oauth/authorize?client_id=2909814059fca9e3458a&scope=repo&redirect_uri=http://0.0.0.0:8000/#/'}> Please authorize github. </a>
      </div>
    );
  }
});

module.exports = OAuth;
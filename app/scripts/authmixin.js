var auth = require("./auth.js");
var Github = require("github-api");

var Authentication = {
  statics: {
    // if we are not logged in, will redirect to login
    willTransitionTo: function(transition) {
      if (!auth.loggedIn()) {
        if (auth.getCode()) {
          console.log()
          auth.login().then(function(success) {
            //trigger initialize github object
            window.github = new Github({
              token: auth.getToken(),
              auth: "oauth"
            });
            console.log(github);
          }, function(error) {
            //if the code is not working, get a new code
            transition.redirect('/oauth', {}, {});
          })
        } else {
          transition.redirect('/oauth', {}, {});
        }
      } else {
        //trigger initialize github object
        window.github = new Github({
          token: auth.getToken(),
          auth: "oauth"
        });
        console.log(github);
      }
    }
  }
};

module.exports = Authentication;
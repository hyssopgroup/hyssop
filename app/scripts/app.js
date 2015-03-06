var auth = require('./auth');
var Router = require('./router');

//save auth code
if(document.location.search) {
  auth.saveCodeFromParams(document.location.search);
}

Router.start();
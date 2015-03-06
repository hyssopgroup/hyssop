var cookie = require("cookies-js");
var $ = require("jquery-browserify");
var Q = require("q"); 

var auth = {
  login: function(key) {
    var d = Q.defer();
    var ajax = $.getJSON('https://hyssop-gatekeeper.herokuapp.com/authenticate/' + cookie.get("code"), 
      function(data) {
        if(data.error) {
          d.reject(data.error);
        } else {
          cookie.set("token", data.token);
          cookie.expire("code");
          d.resolve(data.token);
        }
      });
    return d.promise;
  },
  getInfo: function() {
    return {
      'name': cookie.get("name"),
      'token': cookie.get("token"),
      'id': cookie.get("id")
    }
  },
  saveCodeFromParams: function(loc) {
    console.log("find code!");
    var q = getQueryParams(loc);
    if (q.code) {
      console.log("set code!");
      cookie.set("code", q.code);
    }
  },
  getCode: function() {
    return cookie.get("code");
  },
  getToken: function() {
    return cookie.get("token");
  },

  logout: function(cb) {
    cookie.expire("token");
    cookie.expire("name");
    cookie.expire("id");
    cookie.expire("code");

    if (cb) cb();
    this.onChange(false);
  },

  loggedIn: function() {
    console.log("Logged in? ", !!cookie.get("token"));
    return !!cookie.get("token");
  }
};

function getQueryParams(qs) {
  qs = qs.split("+").join(" ");

  var params = {},
    tokens,
    re = /[?&]?([^=]+)=([^&]*)/g;

  while (tokens = re.exec(qs)) {
    params[decodeURIComponent(tokens[1])] = decodeURIComponent(tokens[2]);
  }

  return params;
}

module.exports = auth;
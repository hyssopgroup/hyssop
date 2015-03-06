var Reflux = require('reflux');
var Cookies = require('cookie-js');
var $ = require('jquery-browserify');
var _ = require('lodash');
var authActions = require('../actions/authActions');

var defaultUser = {
	name: "",
	repos: ""
}

// Creates a DataStore
var userStore = Reflux.createStore({
	
});
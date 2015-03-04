/*global Ember, Todos */
(function () {
	'use strict';
	App.Router.map(function() {
	  // put your routes here
	});

	App.IndexRoute = Ember.Route.extend({
	  controllerName: 'jiraalert',
	  model: function() {
	    return Ember.$.getJSON('/jiraalert').then(function(data){
	    	return data;
	    })
	  }
	});
})();
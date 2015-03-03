App = Ember.Application.create();

App.Router.map(function() {
  // put your routes here
});

App.IndexRoute = Ember.Route.extend({
  model: function() {
    return Ember.$.getJSON('/jiraalert').then(function(data){
    	return data;
    })
  }
});
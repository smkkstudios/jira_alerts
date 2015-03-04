/*global Todos, Ember */
(function () {
	'use strict';
	App.JiraalertController = Ember.ObjectController.extend({
		actions: {
			updateModel:function(){
				return Ember.$.getJSON('/jiraaler').then(function(data){
			    	return data;
			    })
			}
		}
	});
})();

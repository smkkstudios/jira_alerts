/*global Todos, Ember */
(function () {
	'use strict';
	App.JiraalertController = Ember.ObjectController.extend({
		actions: {
			updateModel:function(){
				this.model = '';
			}
		}
	});
})();

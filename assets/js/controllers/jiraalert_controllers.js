/*global Todos, Ember */
(function () {
	'use strict';
	App.JiraalertController = Ember.ObjectController.extend({
		actions: {
			updateModel:function(){
				var alert = this.get('model');
					alert.set('user', {displayName:'meho dodo'});
					alert.save();
			}
		}
	});
})();

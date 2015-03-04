/*global Alerts, DS */
(function () {
	'use strict';
	App.Alert = DS.Model.extend({
		user: DS.attr(),
		issue: DS.attr()
	});
})();
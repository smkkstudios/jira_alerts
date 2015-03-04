/*global Alerts, DS */
(function () {
	'use strict';
	var attr = DS.attr;
	App.Alert = DS.Model.extend({
		user: DS.attr(),
		issue: DS.attr()
	});
})();
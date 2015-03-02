/*global angular */

/**
 * The main controller for the app. The controller:
 * - retrieves and persists the model via the todoStorage service
 * - exposes the model to the template and provides event handlers
 */
angular.module('jiramvc')
	.controller('JiraCtrl', function JiraCtrl($scope, $routeParams, $filter) {
		'use strict';

		$scope.welcome  = 'welcome to this app boyo';
});

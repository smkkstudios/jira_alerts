angular.module('jiramvc', ['ngRoute'])
	.config(function ($routeProvider) {
		'use strict';

		var routeConfig = {
			controller: 'JiraCtrl',
			templateUrl: 'jiramvc-index.html'
		};
		$routeProvider
			.when('/', routeConfig)
			.when('/:status', routeConfig)
			.otherwise({
				redirectTo: '/'
		});

	});

module.exports = ['$routeProvider','$locationProvider', function ($routeProvider, $locationProvider) {
	$routeProvider
		.when('/', {
			template: '<h1>HEI!</h1>',
			controller: 'testController'
		})
}];

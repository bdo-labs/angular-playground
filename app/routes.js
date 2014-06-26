module.exports = ['$routeProvider','$locationProvider', function ($routeProvider, $locationProvider) {
	console.count('config');
	$routeProvider
		.when('/', {
			template: '<h1>HEI!</h1>',
			controller: 'TestController'
		})
}];

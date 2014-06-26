var angular = require('angular');
require('angular-router-browserify')(angular);
// var user = require('user');

// var renderer = require('./app/directives/renderer.js');

var backstage = angular.module('test', ['ngRoute']);

backstage.config(require('./app/routes.js'));

backstage.controller('TestController', ['$scope', function ($scope) {
	console.log('I\'m here!')
}]);

// backstage.directive('moduleRenderer', renderer);

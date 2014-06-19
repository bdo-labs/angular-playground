
/*
 * Module dependencies.
 */
var angular = require('angular');
require('angular-router-browserify')(angular);

/**
 * Application.
 */
var app = angular.module('angular-playground', ['ngRoute']);

/**
 * Routes.
 */
app.config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider){
  // Use clean URI's & history API for supported browsers
  var html5Mode = (window.history && window.history.pushState);
  $locationProvider.html5Mode(html5Mode).hashPrefix('!');

  $routeProvider
    .when('/', {
      template: '<main><h1>{{hello}}</h1></main>',
      controller: 'SwatchCtrl'
    })
    .otherwise({ redirectTo: '/' });
}]);

app.controller('SwatchCtrl', ['$scope', require('./swatch/SwatchController')]);


var info = angular.module("myApp", ["ngRoute"]);
info.config(["$routeProvider", function($routeProvider) 
{
	$routeProvider
	.when("/", {
		templateUrl: "pages/home.html",
		controller: "homeController"
	});
}]);
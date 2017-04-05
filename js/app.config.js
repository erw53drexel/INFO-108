var app = angular.module("myApp", ["ngRoute", ,"ngAnimate", "ngMaterial"]);
app.config(function($routeProvider) {
	//Route links
    $routeProvider
    .when("/", {
        templateUrl : "pages/home.html",
        controller: "homeController"
    });
});
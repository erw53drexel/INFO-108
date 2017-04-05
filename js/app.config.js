var app = angular.module("myApp", ["ngRoute"]);
app.config(function($routeProvider) {
    $routeProvider
    .when("/home", {
        templateUrl : "pages/home.html",
        controller: "homeController"
    });
});
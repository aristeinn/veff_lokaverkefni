import React from 'react'
import { render } from 'react-dom'
import App from '../components/App.js'

render(<App />, document.getElementById('app'));

var tvsiteApp = angular.module('tvsiteApp', ['ngRoute'])
    .config(['$routeProvider', function ($routeProvider) {
        $routeProvider
            .when('/first', {
                templateUrl: 'first.html'
            })
            .when('/second', {
                templateUrl: 'second.html'
            })
            .when('/third', {
                templateUrl: 'third.html'
            })
            .when('/fourth', {
                templateUrl: 'fourth.html'
            })
            .when('/fifth', {
                templateUrl: 'fifth.html'
            })
            .otherwise({
                redirectTo: '/first'
            });
    }]);

// Controllers

tvsiteApp
    .controller('mainCtrl', function ($scope, tvService) {

        var mapster = function (x) {
            x.description = x.description.substring(0, 40) + '..';
            x.startTimeDate = new Date(x.startTime);
            x.isDone = ((new Date()).getTime() > x.startTimeDate.getTime());
            return x;
        };

        tvService
            .stod2()
            .success(function (d) {
                $scope.stod2schedule = d.results.map(mapster);
            });

        tvService
            .stod2sport()
            .success(function (d) {
                $scope.stod2sportschedule = d.results.map(mapster);
            });

        tvService
            .ruv()
            .success(function (d) {
                $scope.ruvschedule = d.results.map(mapster);
            });

        tvService
            .stod2bio()
            .success(function (d) {
                $scope.stod2bioschedule = d.results.map(mapster);
            });

        tvService
            .stod3()
            .success(function (d) {
                $scope.stod3schedule = d.results.map(mapster);
            });


        $scope.stod2schedule = [];
        $scope.stod2sportschedule = [];
        $scope.ruvschedule = [];
        $scope.stod2bioschedule = [];
        $scope.stod3schedule = [];

    })
    .factory('tvService', ['$http', function ($http) {

        var obj = {};
        obj.stod2 = function () {
            return $http.get('http://apis.is/tv/stod2')
                .success(function (data) {
                    return data.results;
                })
                .error(function (err) {
                    return err;
                });
        };
        obj.stod2sport = function () {
            return $http.get('http://apis.is/tv/stod2sport')
                .success(function (data) {
                    return data.results;
                })
                .error(function (err) {
                    return err;
                });
        };
        obj.ruv = function () {
            return $http.get('http://apis.is/tv/ruv')
                .success(function (data) {
                    return data.results;
                })
                .error(function (err) {
                    return err;
                });
        };
        obj.stod2bio = function () {
            return $http.get('http://apis.is/tv/stod2bio')
                .success(function (data) {
                    return data.results;
                })
                .error(function (err) {
                    return err;
                });
        };
        obj.stod3 = function () {
            return $http.get('http://apis.is/tv/stod3')
                .success(function (data) {
                    return data.results;
                })
                .error(function (err) {
                    return err;
                });
        };


        return obj;
    }]);

/**
 * Created by User on 22/09/2015.
 */
var module = angular.module('starter.services', ['ngResource'])

module.factory('Session', function ($resource) {
        return $resource('http://localhost:5000/sessions/:sessionId');
    });

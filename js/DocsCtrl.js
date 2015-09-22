/**
 * Created by User on 21/09/2015.
 */
var module = angular.module('starter.DocsCtrl', ['ionic' , 'ngStorage' , 'ui.router']);

module.controller('DocsCtrl' , function($scope){
        $scope.docslist = app_config.docs_list;
    }
);

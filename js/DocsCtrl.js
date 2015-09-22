/**
 * Created by User on 21/09/2015.
 */
var module = angular.module('starter.DocsCtrl', [ 'ionic'
                                                , 'ngStorage'
                                                , 'ui.router'
                                                , 'starter.services'
                                                ]);
module.controller('DocsCtrl' ,['$scope' , '$sessionStorage' , 'PinCodeChecker' , myFunc]);

function myFunc($scope , $sessionStorage , PinCodeChecker){
    //---------------------------------------------------
    //--                     I N I T
    //---------------------------------------------------
    $scope.init = function(){
        console.log('DocsCtrl.Init()');
        PinCodeChecker.PinCodeCheckerFct;
    };

    console.log('DocsCtrl');
    PinCodeChecker.PinCodeCheckerFct;
    $scope.docslist = app_config.docs_list;

};

/**
 * Created by User on 22/09/2015.
 */
var module = angular.module('starter.IndexCtrl', ['ionic' , 'ngStorage' , 'ui.router']);

module.controller('IndexCtrl' , function($scope, $ionicModal, $timeout , $sessionStorage ) {
    console.log('----------------- IndexCtrl ------------------');

    //------------------------------------------------------------
    //-- When        Who    Description
    //-- ----------  -----  --------------------------------------
    //-- 16/09/2015  R.W.   function called from index.html
    //                      by ng-init
    //------------------------------------------------------------
    $scope.init = function(){
        $scope.setPinCodeReq();
        console.log('IndexCtrl.init()');
    };
    //-------------------------------------------------------------
    //-- When        Who    Description
    //-------------  -----  ---------------------------------------
    //-- 16/09/2015  R.W.
    //-------------------------------------------------------------
    $scope.setPinCodeReq = function(){
        var pinCodeReq = Math.floor(Math.random() * 2);
        var retVal;
        if(pinCodeReq === 0 ){
            retVal = true;
        }else if(pinCodeReq === 1 ){
            retVal = false;
        }

        $sessionStorage.pinCodeRequired = retVal;
    };
    console.log('----------------- end IndexCtrl ------------------');
});


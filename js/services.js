/**
 * Created by User on 22/09/2015.
 */
var module = angular.module('starter.services', [ 'ionic'
                                                , 'ngStorage'
                                                , 'ui.router'
                                                , 'starter.PinCodeCtrl'
                                                , 'starter.MenuCtrl'
                                                , 'starter.IndexCtrl'
                                                , 'starter.DocsCtrl'
                                                , 'starter.DocHrDetailsCtrl'
]);

module.factory('PinCodeChecker', PinCodeCheckerFct);
function PinCodeCheckerFct($sessionStorage , $state){
    console.log('----------------- module.factory(PinCodeChecker, PinCodeCheckerFct); -----------------');
    var pinCodeRequired = $sessionStorage.pinCodeRequired;
    var retValue;
    if(pinCodeRequired === true){
        retValue = true;
        $state.go('app.pincode');
    }
    else if(pinCodeRequired === false){
        retValue = false;
    }
    return retValue;
};



/**
 * Created by User on 22/09/2015.
 */
var module = angular.module('starter.MenuCtrl', [  'ionic'
                                                 , 'ngStorage'
                                                 , 'ui.router'
                                                 , 'starter.services'
                                                ]
);

module.controller('MenuCtrl' ,[ '$scope'
                              , '$state'
                              , '$ionicModal'
                              , '$timeout'
                              , '$sessionStorage'
                              , 'PinCodeChecker'
                              , DocsFuncCtrl]);

//module.controller('MenuCtrl', function($scope, $state , $ionicModal, $timeout) {
function DocsFuncCtrl ($scope , $state ,$ionicModal , $timeout , $sessionStorage , PinCodeChecker){

    $scope.init = function(){
        console.log('MenuCtrl.log');
        PinCodeChecker.PinCodeCheckerFct;
    }
    // With the new view caching in Ionic, Controllers are only called
    // when they are recreated or on app start, instead of every page change.
    // To listen for when this page is active (for example, to refresh data),
    // listen for the $ionicView.enter event:
    //$scope.$on('$ionicView.enter', function(e) {
    //});
    this.menu_list = app_config.menu_list;

    //----------------------------------------------------------
    //-- When        Who          Description
    //-- ----------  -----------  ------------------------------
    //-- 21/09/2015  R.W.
    //----------------------------------------------------------
    $scope.itemOnClick = function(docType){

        var pinCodeRequired = $sessionStorage.pinCodeRequired;


        if(pinCodeRequired === true){
            $state.go('app.pincode');
        }
        else {
            var pathByType;
            if (docType === "HR") {
                pathByType = app_config.path_by_type.HR;
            }

            $state.go(pathByType);
        }
    };
    //----------------------------------------------------------
    //-- When        Who          Description
    //-- ----------  -----------  ------------------------------
    //-- 21/09/2015  R.W.
    //----------------------------------------------------------
    $scope.itemClass = function(enable_type){
        var ret_val;
        if(enable_type === 'Y'){
            ret_val = "item";
        }
        else if(enable_type === 'N'){
            ret_val = "item disabled";
        }
        return $scope.obj.value =  ret_val;
    }// itemClass
    // Form data for the login modal
    $scope.loginData = {};

    // Create the login modal that we will use later
    $ionicModal.fromTemplateUrl('templates/login.html', {
        scope: $scope
    }).then(function(modal) {
        $scope.modal = modal;
    });

    // Triggered in the login modal to close it
    $scope.closeLogin = function() {
        $scope.modal.hide();
    };

    // Open the login modal
    $scope.login = function() {
        $scope.modal.show();
    };

    // Perform the login action when the user submits the login form
    $scope.doLogin = function() {
        console.log('Doing login', $scope.loginData);

        // Simulate a login delay. Remove this and replace with your login
        // code if using a login system
        $timeout(function() {
            $scope.closeLogin();
        }, 1000);
    };
};


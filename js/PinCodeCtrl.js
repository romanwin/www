/**
 * Created by User on 22/09/2015.
 */
var module = angular.module('starter.PinCodeCtrl', ['ionic' , 'ngStorage' , 'ui.router']);

module.controller('PinCodeCtrl', function($scope, $location, $timeout) {
    //------------------------------------------
    //--            init
    //------------------------------------------
    $scope.init = function() {
        $scope.passcode = "";
        $scope.send.satus = true;
    };
    //------------------------------------------
    //--            add
    //------------------------------------------
    $scope.add = function(value) {
        if($scope.passcode.length < 4) {
            $scope.passcode = $scope.passcode + value;
            if($scope.passcode.length == 4) {
                $timeout(function() {
                    $scope.enable_send();
                    console.log("The four digit code was entered");
                }, 500);
            }
            else
            {
                $scope.disable_send();
            }
        }
    };
    //------------------------------------------
    //--            delete
    //------------------------------------------
    $scope.delete = function() {
        if($scope.passcode.length > 0) {
            $scope.passcode = $scope.passcode.substring(0, $scope.passcode.length - 1);
            $scope.disable_send();
        }
    };
    //------------------------------------------
    //--           send
    //------------------------------------------
    $scope.send = function() {

        var pass_code_length = $scope.passcode.length;
        for(var i = 0 ; i < pass_code_length ; i++) {
            $scope.passcode = $scope.passcode.substring(0, $scope.passcode.length - 1);
        }
        $scope.disable_send();
    } // send
    //------------------------------------------
    //--         disable_send
    //------------------------------------------
    $scope.disable_send = function() {
        $scope.send.satus = true;
    }
    //------------------------------------------
    //--            enable_send
    //------------------------------------------
    $scope.enable_send = function() {
        $scope.send.satus = false;
    }

}); // PinCodeCtrl


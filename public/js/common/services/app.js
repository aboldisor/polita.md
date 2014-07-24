

(function(){
    var app = angular.module('politaApp', ['ui.bootstrap']);


    app.controller('langController',
        ['$scope',function($scope) {
            $scope.currentLanguage ="ro";
            $scope.changeLanguage = function (langKey) {
                   $scope.currentLanguage = langKey;
            };

        }]);

})();


//-------------------------------------------------------------------
    var ro = {
        INDEX: {

        },
        COMMON: {

        }

     };
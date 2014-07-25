/**
 * Created by aboldisor on 7/25/14.
 */
app.controller('langController',  ['$scope','$translate',function($scope,$translate) {

    $scope.currentLanguage = $translate.use();
    $scope.changeLanguage = function (langKey) {
        $translate.use(langKey);
        $scope.currentLanguage = langKey;
    };

}]);

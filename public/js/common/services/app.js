

(function(){
    var app = angular.module('politaApp', ['ui.bootstrap','pascalprecht.translate'])

     .config(['$translateProvider', function ($translateProvider) {
            var ro = {
                INDEX : {
                    DRUGS    :"Medicamente",
                    ANALYSIS : "Analize",
                    HEALTHTRACKER : "Health-tracker",
                    CHECKINSURANCE: "VERIFICA POLITA DE ASIGURARE",
                    CHECKDOCTORREGISTRATION : "VERIFICA INREGISTRAREA LA MEDICUL DE FAMILIE"


                }
            };

            var ru = {
                INDEX : {
                    DRUGS    : "Справочник лекарств",
                    ANALYSIS : "Медицинские анализы",
                    HEALTHTRACKER : "Календарь здоровья",
                    CHECKINSURANCE: "ПРОВЕРИТЬ СТРАХОВОЙ ПОЛИС",
                    CHECKDOCTORREGISTRATION : "ПРОВЕРКА ЗАПИСИ ПАЦИЕНТОВ НА ПРИЕМ К ВРАЧУ"

                }
            };


            $translateProvider.translations('ru', ru);
            $translateProvider.translations('ro', ro);

         $translateProvider.determinePreferredLanguage(function(){
                var language = window.navigator.userLanguage || window.navigator.language;

                switch(language) {
                    case "ru":
                    case "ru-ru":
                    case "ru-RU":
                    case "ru_RU":
                        return "ru";
                    case "ro":
                    case "ro-ro":
                    case "ro-RO":
                    case "ro_RO":
                        return "ro";
                    default:
                        return "ro";
                }

            });



      }]);


    //TODO set in client Controler Directory
     app.controller('langController',  ['$scope','$translate',function($scope,$translate) {

            $scope.currentLanguage = $translate.use();
            $scope.changeLanguage = function (langKey) {
                $translate.use(langKey);
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



    var app = angular.module('politaApp', ['ui.bootstrap','pascalprecht.translate','ngCookies'])

     .config(['$translateProvider', function ($translateProvider) {
            var ro = {
                INDEX : {
                    DRUGS    :"Medicamente",
                    ANALYSIS : "Analize",
                    HEALTHTRACKER : "Health-tracker",
                    CHECK         : "VERIFICA",
                    CHECKINSURANCE: "POLITA DE ASIGURARE",
                    CHECKDOCTORREGISTRATION : "VERIFICA INREGISTRAREA LA MEDICUL DE FAMILIE",
                    OURTEAM: "ECHIPA NOASTRA",
                    MOTTO:   "Suntem ceia ce facem",
                    CONTACTUS : "CONTACTEAZA-NE"


                }
            };

            var ru = {
                INDEX : {
                    DRUGS    : "Справочник лекарств",
                    ANALYSIS : "Медицинские анализы",
                    HEALTHTRACKER : "Календарь здоровья",
                    CHECK         : "ПРОВЕРИТЬ",
                    CHECKINSURANCE: "СТРАХОВОЙ ПОЛИС",
                    CHECKDOCTORREGISTRATION : "ПРОВЕРКА ЗАПИСИ ПАЦИЕНТОВ НА ПРИЕМ К ВРАЧУ",
                    OURTEAM: "НАША КОМАНДА",
                    MOTTO:   "Мы то что мы делаем",
                    CONTACTUS : "Напиши нам"

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

            }).useLocalStorage();






      }]);







